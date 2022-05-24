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
  const [depPi, setDepPi] = useState([])

  const fetchDepPi = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/deployers/${user.dep_id}/`)
      setDepPi(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchDepPi()
  }, []);


  return (
    <div className="container">
      {/* <OverviewTable/> */}
      <TaskCalendar/>
      <PIDisplay data={depPi}/>
    </div>
  );
};

export default DepHomePage;
