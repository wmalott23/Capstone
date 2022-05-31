import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();

  useEffect(() => {
  });
  return (!user.isDeployer ? 
    <div className="container">
      <h1>Admin Page for {user.username}!</h1>
      <Link to="/dpc/register" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">
        Click to register a DPC!
      </button></Link>
      <Link to="/dpc/" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">
        View all Locations
      </button></Link>
      <Link to="/dep/register" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">
        Click to register a Deployer!
      </button></Link>
    </div>
    :
    <div className="container">
      <h1>Admin Page for {user.username}!</h1>
      <Link to="/dep/" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">View Your Home Page!
      </button>
      </Link>
    </div>
  );
};

export default HomePage;
