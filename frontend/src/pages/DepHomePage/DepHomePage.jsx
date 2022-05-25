import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

//Import Components
import OverviewTable from "../../components/OverviewTable/OverviewTable";
import TaskCalendar from "../../components/TaskCalendar/TaskCalendar";
import PIDisplay from "../../components/PIDisplay/PIDisplay";
import axios from "axios";

const DepHomePage = () => {
  const [user, token] = useAuth();
  const [depPi, setDepPi] = useState({})
  const [steps, setSteps] = useState([])

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
    const today = new Date()
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
    let e = new Date(d)
    for(let i=0; i<revSteps.length; i++){
      let revLength = revSteps[i].length
      let startInMilli = d.setDate(d.getDate()-revLength)
      let start = new Date(startInMilli)
      let start2 = new Date(start)
      startDates.push(start)
      startDates2.push(start2)
    }
    endDates.push(e)
    for(let i=0; i<revSteps.length-1; i++){
      let endMinusOne = startDates2[i].setDate(startDates2[i].getDate()-1)
      let newD = new Date(endMinusOne)
      endDates.push(newD)
    }
    return({startDates, endDates})
  }




  useEffect(() => {
    fetchDepPi()
  }, []);

  useEffect(async () => {
    await fetchSteps()
    createStepTimeline()
    console.log(createStepTimeline())
  }, [depPi]);


  return (
    <div className="container">
      <OverviewTable/>
      <TaskCalendar/>
      <PIDisplay data={depPi}/>
    </div>
  );
};

export default DepHomePage;
