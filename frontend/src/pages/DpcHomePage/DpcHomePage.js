import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

//Importing components
import OverviewTable from "../../components/OverviewTable/OverviewTable";
import TaskCalendar from "../../components/TaskCalendar/TaskCalendar";
import LocList from "../../components/LocList/LocList";
import DepList from "../../components/DepList/DepList";
import axios from "axios";

const DpcHomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [locations, setLocations] = useState([])
  const [locationNames, setLocationNames] = useState([])
  

  const fetchLocations = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/locations/')
    setLocations(response.data)
    setLocationNames(response.data.name)
  }

  useEffect(() => {
    fetchLocations()
  }, );

  return (
    <div className="container">
      {console.log(locations)}
      <OverviewTable data={locations} dataNames={locationNames}/>
      <TaskCalendar/>
      <LocList/>
      <DepList/>
    </div>
  );
};

export default DpcHomePage;
