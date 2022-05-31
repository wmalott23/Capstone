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
  return (
    <div className="container">
      <h1>Admin Page for {user.username}!</h1>
      <div>
      <Link to="/dpc/register">Click to register a DPC!</Link>
      </div>
      <Link to="/dep/register">Click to register a deployer!</Link>
    </div>
  );
};

export default HomePage;
