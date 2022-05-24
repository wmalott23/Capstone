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
  const [deployment, setDeployment] = useState({})
  const [location, setLocation] = useState({})

  const fetchDepPi = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/deployers/${user.dep_id}/`)
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

  const fetchRequirements = async () => {

    try {
      console.log(deployment.location.id)
      let response = await axios.get(`http://127.0.0.1:8000/api/locations/${deployment.location.id}/`)
      setLocation(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  

  useEffect(() => {
    fetchDepPi()
  }, []);

  useEffect(async () => {
    await fetchDeployment()
  }, [depPi]);


  return (
    <div className="container">
      {/* <OverviewTable/> */}
      <TaskCalendar/>
      <PIDisplay data={depPi}/>
    </div>
  );
};

export default DepHomePage;
