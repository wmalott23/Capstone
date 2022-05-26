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
    fetchSteps().then(createStepTimeline())
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
  //takes the list of steps in a given deployment and spits out steps in a format acceptable to the overviewTable and taskCalendar
  const createStepTimeline = async () => {
    let startDates = []
    let startDates2 = []
    let endDates = []
    let startDate = steps[0].requirement.requirement_list.deployment.start_date
    //organizes based on step priority, priority number 1 last in line so that it gets assigned a start date last and is put in the front of the dates
    let adjSteps = []
    for(let i=steps.length; i>0; i--){
      for(let l=0; l<steps.length; l++){
        if(steps[l].priority === i){
          adjSteps.push(steps[l])
        }
    }}
    console.log(steps)
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
      return `${depPi.last_name} ${el.requirement.name} ${el.name}`
    })
    //assigns startdate, enddate, and title into a list of objects (one for each step)
    let stepObjects = []
    for(let i=0; i<startDates.length; i++){
      stepObjects.push({startDate: startDates[i], endDate: endDates[i], title: stepTitles[i]})
    }
    //returns list of objects
    setStepDates(stepObjects)
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
