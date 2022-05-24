import React, { useState } from 'react';
import axios from 'axios';

const DeploymentCD = (props) => {

    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [deployerId, setDeployerId] = useState(0)
    const [requirementListId, setRequirementListId] = useState(0)

    const handleSubmit = async () => {
        const BASE_URL = "http://127.0.0.1:8000/api";
        try {
          let finalData = {
            name: name,
            start_date: startDate,
            end_date: endDate,
            deployer: deployerId,
            requirement_list: requirementListId,
          };
          let response = await axios.post(`${BASE_URL}/deployments/`, finalData);
          if (response.status === 201) {
            console.log("Successful created Deployer!");
          }
        } catch (error) {
          console.log(error.response.data);
        }
      };

    return ( 
        <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First name:{" "}
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            onChange={(event) => setEndDate(event.target.value)}
          />
        </label>
        <label>
          Address:{" "}
          <input
            type="text"
            onChange={(event) => setDeployerId(event.target.value)}
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            type="text"
            onChange={(event) => setRequirementListId(event.target.value)}
          />
        </label>
        <button>Create Deployer!</button>
      </form>
    </div>
     );
}
 
export default DeploymentCD;