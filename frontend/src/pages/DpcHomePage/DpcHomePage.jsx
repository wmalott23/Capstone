import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

//Importing components
import OverviewTable from "../../components/OverviewTable/OverviewTable";
import TaskCalendar from "../../components/TaskCalendar/TaskCalendar";
import LocList from "../../components/LocList/LocList";
import DepList from "../../components/DepList/DepList";
import axios from "axios";
import LocCRUD from "../../components/LocCRUD/LocCRUD";

const DpcHomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [locations, setLocations] = useState([])
  const [deployers, setDeployers] = useState([])
  const [deployments, setDeployments] = useState([])
  const [steps, setSteps] = useState([])
  const [stepDates, setStepDates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDeployers()
    fetchDeployments()
    fetchLocations()
    fetchSteps()
  }, []);

  useEffect(() => {
    let mounted=true
    createStepsByDeployment().then(() => {
      if(mounted) {
      }})
    return function cleanup() {
        mounted = false
        setLoading(false)
    }
  }, [steps])


  const fetchLocations = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/locations/')
      setLocations(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const fetchDeployers = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/deployers/',
      {headers: { Authorization: `Bearer ${token}`}})
      setDeployers(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const fetchSteps = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/steps/`)
      setSteps(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const fetchDeployments = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/deployments/`)
      setDeployments(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  //takes the list of deployments, gets steps in a given deployment and spits out steps in a format acceptable to the overviewTable and taskCalendar
  const createStepsByDeployment = async () => {
    console.log(steps)
    let stepObjects = []
    for(let j=0; j<deployments.length; j++){
      let depSteps = []
      let startDates = []
      let startDates2 = []
      let endDates = []
      let depId = deployments[j].id
      let lastName
      // gets all steps for this deployment
      for(let i=0; i<steps.length; i++){
        if(steps[i].requirement.requirement_list.deployment.id === depId){
          depSteps.push(steps[i])
        }}
      //sets lastName for this deployment
      for(let i=0; i<deployers.length; i++){
        if(deployers[i].deployment.id === depId){
          console.table(deployers[i].deployment.id, depId)
          lastName = deployers[i].last_name
        }}
      //sets start date of deployment
      console.log(depSteps)
      let startDate = depSteps[0].requirement.requirement_list.deployment.start_date
      //organizes based on step priority, priority number 1 last in line so that it gets assigned a start date last and is put in the front of the dates
      let adjSteps = []
      for(let i=depSteps.length; i>0; i--){
        for(let l=0; l<depSteps.length; l++){
          if(depSteps[l].priority === i){
            adjSteps.push(depSteps[l])
          }
      }}
      //calculates start dates (from last step) based on length, counting backwards from the deployment start date
      var n = Date.parse(startDate)
      var d = new Date(n)
      let e = new Date(d).toISOString()
      for(let i=0; i<adjSteps.length; i++){
        let adjLen = adjSteps[i].len
        let startInMilli = d.setDate(d.getDate()-adjLen)
        let start = new Date(startInMilli).toISOString()
        let start2 = new Date(start)
        startDates.push(start)
        startDates2.push(start2)
      }
      //calculates end dates (from last step) (subtracting one from start date in last step to get end date in second to last step)
      endDates.push(e)
      for(let i=0; i<adjSteps.length-1; i++){
        let endMinusOne = startDates2[i].setDate(startDates2[i].getDate()-1)
        let newD = new Date(endMinusOne).toISOString()
        endDates.push(newD)
      }
      //pulls titles from each step
      let stepTitles = adjSteps.map(el => {
        return `${lastName} ${el.requirement.name} ${el.name}`
      })
      //assigns startdate, enddate, and title into a list of objects (one for each step)
      for(let i=0; i<startDates.length; i++){
        stepObjects.push({startDate: startDates[i], endDate: endDates[i], title: stepTitles[i]})
      }
    }
    //returns list of objects
    console.log(stepObjects)
    setStepDates(stepObjects)
  }



  return ( loading ? <p>LOADING</p> :
    <div className="container d-flex flex-column align-items-center">
      <h1>All Deployment Location Details</h1>
      <OverviewTable dates={stepDates}/>
      <TaskCalendar dates={stepDates} className="m-4 border border-primary"/>
      <Table className="m-4 border border-primary rounded" style={{ width: '8rem' }}>
        <tr>
          Location List
        </tr>
        <LocList data={locations}/>
      </Table>
      <Table className="mb-4 border border-primary" style={{ width: '8rem' }}>
        <tr>
          Deployer List
        </tr>
        <DepList data={deployers}/>
      </Table>
      <Link to="/dpc/req/" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">Go to Requirement Page</button>
      </Link>
      <LocCRUD/>
    </div>
  );
};

export default DpcHomePage;
