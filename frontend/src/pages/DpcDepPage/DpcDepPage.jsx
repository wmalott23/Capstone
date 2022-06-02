import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DeployerUpdate from '../../components/DeployerUpdate/DeployerUpdate';
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import TaskCalendar from '../../components/TaskCalendar/TaskCalendar';
import { Link } from 'react-router-dom';
import DepNotesList from '../../components/DepNotes/DepNotesList';
import PIDisplay from '../../components/PIDisplay/PIDisplay';

const DpcDepPage = () => {


  
    const {deployerId} = useParams();
    const [loading, setLoading] = useState(true);
    const [depPi, setDepPi] = useState({});
    const [deployment, setDeployment] = useState({});
    const [steps, setSteps] = useState([]);
    const [stepDates, setStepDates] = useState([]);

    useEffect(() => {
      fetchDepPi()
    }, [])

    useEffect(() => {
      fetchDeployment()
      fetchSteps()
    }, [depPi])

    useEffect(() => {
      let mounted = true
      createStepTimeline().then(() => {
        if(mounted) {
        }})
      return function cleanup() {
          mounted = false
          setLoading(false)
      }
    }, [steps])


    const fetchDepPi = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/deployers/${deployerId}/`)
        setDepPi(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    const fetchDeployment = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/deployments/${depPi.deployment.id}/`)
        setDeployment(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    const fetchSteps = async () => {
      try {
        console.log(depPi)
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
    let startDate = deployment.start_date
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

    return ( loading ? <p>LOADING</p> :
    <div className="container d-flex flex-column align-items-center">
      <h2>{`${depPi.first_name} ${depPi.last_name} Overview`}</h2>
      <OverviewTable dates={stepDates}/>
      <TaskCalendar dates={stepDates}/>
      <div className="d-flex flex-row col-md-12">
        <div className="d-flex flex-column col-md-5">
          <DepNotesList steps={steps}/>
        </div>
        <div className="d-flex flex-column col-md-5">
          <PIDisplay data={depPi}/>
        </div>
      </div>
      <DeployerUpdate/>
      <Link to="/dpc/" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">Return to DPC Overview</button>
      </Link>
    </div>
     );
}
 
export default DpcDepPage;