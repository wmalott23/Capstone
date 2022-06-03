import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


//Importing Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import DeploymentCD from '../../components/DeploymentCD/DeploymentCD';
import TaskCalendar from '../../components/TaskCalendar/TaskCalendar';
import DepCRUD from '../../components/DepCRUD/DepCRUD'
import { Table } from 'react-bootstrap';
import DeploymentList from '../../components/DeploymentList/DeploymentList';


const LocationPage = () => {

    const {locationId} = useParams();
    const [user, token] = useAuth();
    const [allDeps, setAllDeps] = useState([])
    const [location, setLocation] = useState({})
    const [deployments, setDeployments] = useState([])
    const [deployers, setDeployers] = useState([])
    const [stepDates, setStepDates] = useState([])
    const [loading, setLoading] = useState(true)
    const [steps, setSteps] = useState([])

    useEffect(() => {
      fetchDeployments()
      fetchDeployers()
      fetchLocation()
      fetchSteps()
    }, []);

    useEffect(() => {
      let mounted=true
      createStepsByLocation().then(() => {
        if(mounted) {
        }})
      return function cleanup() {
          mounted = false
          setLoading(false)
      }
    }, [steps])


    const fetchLocation = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/locations/${locationId}/`)
        setLocation(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    const fetchDeployments = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/deployments/`)
        setAllDeps(response.data)
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

//takes the location and deployments, gets steps in a given deployment and spits out steps in a format acceptable to the overviewTable and taskCalendar
const createStepsByLocation = async () => {
  for(let j=0; j<allDeps.length; j++){
    let strDep = String(allDeps[j].location.id)
    if(strDep === locationId)
      deployments.push(allDeps[j])
  }
  let stepObjects = []
  // For Every Deployment
  for(let j=0; j<deployments.length; j++){
    let depSteps = []
    let startDates = []
    let startDates2 = []
    let endDates = []
    let depReqListId = deployments[j].requirement_list.id
    let lastName
    let depPi
    // gets all steps for this deployment
    for(let i=0; i<steps.length; i++){
      if(steps[i].requirement && steps[i].requirement.requirement_list.id === depReqListId){
        depSteps.push(steps[i])
      }}
    //sets lastName for this deployment
    for(let i=0; i<deployers.length; i++){
      if(deployers[i].deployment.requirement_list === depReqListId){
        lastName = deployers[i].last_name
        depPi = deployers[i]
      }}
    //sets start date of deployment
    let startDate = deployments[j].start_date
    //organizes based on step priority, priority number 1 last in line so that it gets assigned a start date last and is put in the front of the dates
    let prioSteps = []
    for(let i=5; i>0; i--){
      for(let l=0; l<depSteps.length; l++){
        if(depSteps[l].priority === i){
          prioSteps.push(depSteps[l])
        }
    }}
    //filters adjSteps based on their dependency
    const adjSteps = prioSteps.filter(el => {
      let dependency = el.requirement.dependency
      if(typeof depPi[dependency] === "undefined") {
        return el
      }
      else return (!depPi[dependency] || depPi[dependency] < deployments[j].end_date)
    })
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
  setStepDates(stepObjects)
}

    return ( loading ? <p>LOADING</p> :
    <div className="container">
        <h1>{location.name} Details</h1>
        <OverviewTable dates={stepDates}/>
        <TaskCalendar dates={stepDates}/>
        <Table>
          <thead>
            <tr>
              <th>Deployment ID</th>
              <th>Position Title</th>
              <th>Deployment Start Date</th>
              <th>Deployment End Date</th>
            </tr>
          </thead>
          <tbody>
            <DeploymentList data={deployments}/>
          </tbody>
        </Table>
        <DeploymentCD locationId={locationId}/>
        <DepCRUD/>
        <Link to="/dpc/" className="text-white" style={{ textDecoration: 'none' }}>
          <button className="btn bg-primary p-1 text-white m-1">Return to DPC Overview</button>
        </Link>
    </div>
     );
}
 
export default LocationPage;