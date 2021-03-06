import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>Admin Page for {user.username}!</h1>
      <Link to="/dpc/" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">
        View all Locations
      </button></Link>
      <Link to="/dep/register" className="text-white" style={{ textDecoration: 'none' }}>
      <button className="btn bg-primary p-1 text-white m-1">
        Click to register a Deployer!
      </button></Link>
    </div>
  );
};

export default HomePage;
