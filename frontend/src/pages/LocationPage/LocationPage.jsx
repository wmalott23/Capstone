import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { useParams } from 'react-router-dom';


//Importing Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import DeploymentCD from '../../components/DeploymentCD/DeploymentCD';
import TaskCalendar from '../../components/TaskCalendar/TaskCalendar';


const LocationPage = () => {

    const {locationId} = useParams();
    const [user, token] = useAuth();
    const [allDeps, setAllDeps] = useState([])
    const [deployments, setDeployments] = useState([])
    const [location, setLocation] = useState({})
    const [deployers, setDeployers] = useState([])
    const [stepDates, setStepDates] = useState([])

    useEffect(() => {
      fetchDeployers()
      fetchLocation()
      fetchSteps()
  }, []);

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
          fetchDeployments()
          createStepsByLocation(response.data)
        } catch (error) {
          console.log(error.message)
        }
      }

    //takes in a location, gets all deployments for that location, gets steps for the deployments and spits out steps in a format acceptable to the overviewTable and taskCalendar
    const createStepsByLocation = (steps) => {
      let stepObjects = []
      //get a list of deployments in location, set deployments to that list
      let depList = []
      let depSteps = []
      for(let i=0; i<allDeps.length; i++){
        if(String(allDeps[i].location.id) === locationId){
          depList.push(allDeps[i])
        }
      }
      setDeployments(depList)
      //for every deployment in deployments
      for(let j=0; j<deployments.length; j++){
        let startDates = []
        let startDates2 = []
        let endDates = []
        let depId = deployments[j].id
        let lastName
        // gets all steps for this deployment
        for(let i=0; i<steps.length; i++){
          let stepDepId = steps[i].requirement.requirement_list.deployment.id
          if(stepDepId === depId){
            depSteps.push(steps[i])
          }}
        //sets lastName for this deployment
        for(let i=0; i<deployers.length; i++){
          if(deployers[i].deployment.id === depId){
            lastName = deployers[i].last_name
          }}
        //sets start date of deployment
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
          let endMinusOne = startDates2[i].setTime(startDates2[i].getTime()-1)
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
        }}
      //returns list of objects
      setStepDates(stepObjects)
      console.log(stepObjects)
    }

    return (
    <div className="container">
        <h1>{location.name} Details</h1>
        <OverviewTable dates={stepDates}/>
        <TaskCalendar dates={stepDates}/>
        <DeploymentCD/>
    </div>
     );
}
 
export default LocationPage;