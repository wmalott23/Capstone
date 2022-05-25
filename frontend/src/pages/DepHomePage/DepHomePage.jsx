import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

//Import Components
import TaskCalendar from "../../components/TaskCalendar/TaskCalendar";
import PIDisplay from "../../components/PIDisplay/PIDisplay";
import OverviewTable from "../../components/OverviewTable/OverviewTable";
import axios from "axios";

const DepHomePage = () => {
  const [user, token] = useAuth();
  const [depPi, setDepPi] = useState({})
  const [steps, setSteps] = useState([])
  const [stepDates, setStepDates] = useState([])

  useEffect(() => {
    fetchDepPi()
  }, []);

  useEffect(async () => {
    fetchSteps()
    createStepTimeline()
  }, [depPi]);

  //gets deployer personal information to display in the page
  const fetchDepPi = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/deployers/${user.dep_id}/`)
      setDepPi(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  //gets step information for deploying based on the deployment.
  const fetchSteps = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/steps/req/${depPi.deployment.id}/`)
      setSteps(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const createStepTimeline = () => {
    let startDates = []
    let startDates2 = []
    let endDates = []
    console.log(steps)
    let startDate = steps[0].requirement.requirement_list.deployment.start_date
    let revSteps = []
    for(let i=steps.length-1; i>(-1); i--){
      revSteps.push(steps[i])
    }
    console.log(revSteps)


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
      console.log(startDates2)
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
    console.log(stepDates)
  }


  return (
    <div className="container">
      <div className="d-flex flex-row">
      <OverviewTable dates={stepDates}/>
      <TaskCalendar dates={stepDates}/>
      </div>
      <PIDisplay data={depPi}/>
    </div>
  );
};

export default DepHomePage;
