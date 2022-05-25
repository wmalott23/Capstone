import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

//Importing components
import OverviewTable from "../../components/OverviewTable/OverviewTable";
import TaskCalendar from "../../components/TaskCalendar/TaskCalendar";
import LocList from "../../components/LocList/LocList";
import DepList from "../../components/DepList/DepList";
import axios from "axios";
import { create } from "@mui/material/styles/createTransitions";

const DpcHomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [locations, setLocations] = useState([])
  const [reqLists, setReqLists] = useState([])
  const [deployers, setDeployers] = useState([])
  const [steps, setSteps] = useState([])
  const [stepDates, setStepDates] = useState([])
  const [depName, setDepName] = useState('')  

  useEffect(() => {
    fetchLocations()
    fetchReqLists()
    fetchDeployers()
  }, []);

  useEffect(() => {
    fetchSteps()
    createStepTimeline()
  }, [deployers])

  const fetchLocations = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/locations/')
      setLocations(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const fetchReqLists = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/requirements_lists/')
      setReqLists(response.data)
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

  const createStepTimeline = () => {
    let startDates = []
    let startDates2 = []
    let endDates = []
    let startDate = steps[0].requirement.requirement_list.deployment.start_date
    let revSteps = []
    for(let i=steps.length-1; i>(-1); i--){
      revSteps.push(steps[i])
    }
    var n = Date.parse(startDate)
    var d = new Date(n)
    let e = new Date(d).toISOString()
    for(let i=0; i<revSteps.length; i++){
      let revLength = revSteps[i].length
      let startInMilli = d.setDate(d.getDate()-revLength)
      let start = new Date(startInMilli).toISOString()
      let start2 = new Date(start)
      startDates.push(start)
      startDates2.push(start2)
    }
    endDates.push(e)
    for(let i=0; i<revSteps.length-1; i++){
      let endMinusOne = startDates2[i].setDate(startDates2[i].getDate()-1)
      let newD = new Date(endMinusOne).toISOString()
      endDates.push(newD)
    }
    let stepTitles = steps.map(el => {
      return `${depPi.last_name} ${el.requirement.name} ${el.name}`
    })
    let stepObjects = []
    for(let i=0; i<startDates.length; i++){
      stepObjects.push({startDate: startDates[i], endDate: endDates[i], title: stepTitles[i]})
    }
    setStepDates(stepObjects)
  }



  return (
    <div className="container">
      {/* <OverviewTable data={locations} reqLists={reqLists}/>
      <TaskCalendar/> */}
      <LocList data={locations}/>
      {/* <DepList data={locations}/> */}
    </div>
  );
};

export default DpcHomePage;
