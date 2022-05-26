import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { useParams } from 'react-router-dom';


//Importing Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import DeploymentCD from '../../components/DeploymentCD/DeploymentCD';


const LocationPage = () => {

    const {locationId} = useParams();
    const [user, token] = useAuth();
    const [location, setLocation] = useState({})
    const [steps, setSteps] = useState([])
    const [deployers, setDeployers] = useState([])
    const [stepDates, setStepDates] = useState([])

    useEffect(() => {
      fetchDeployers()
  }, []);

    useEffect(() => {
      fetchSteps()
  }, [deployers]);

    useEffect(() => {
      fetchLocation()
  }, [steps]);

  //   useEffect(() => {
  //     createStepsByLocation()
  // }, [location]);

    const fetchLocation = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/locations/${locationId}/`)
          setLocation(response.data)
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
          createStepsByLocation()
        } catch (error) {
          console.log(error.message)
        }
      }

    //takes in a location, gets steps in a given deployment and spits out steps in a format acceptable to the overviewTable and taskCalendar
  const createStepsByLocation = () => {
      let stepObjects = []
      let depSteps = []
      let startDates = []
      let startDates2 = []
      let endDates = []
      let lastName
      // gets all steps for this deployment
      console.log(steps.requirement)
      for(let i=0; i<steps.length; i++){
        console.log(steps[i])
        if(steps[i].requirement.requirement_list.deployment.location === locationId){
          depSteps.push(steps[i])
          console.table(i, steps[i])
        }}
      console.log(depSteps)
      //sets lastName for this deployment
      for(let i=0; i<deployers.length; i++){
        if(deployers[i].deployment.location === locationId){
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
    //returns list of objects
    console.log(stepObjects)
    setStepDates(stepObjects)
  }

    return (
    <div className="container">
        <h1>{location.name} Details</h1>
        <OverviewTable data={stepDates}/>
        <DeploymentCD/>
    </div>
     );
}
 
export default LocationPage;