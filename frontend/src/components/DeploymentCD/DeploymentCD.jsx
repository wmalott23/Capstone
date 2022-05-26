import React, { useState } from 'react';
import axios from 'axios';

const DeploymentCD = (props) => {

    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [locationId, setLocationId] = useState(0)

    const handleSubmit = async () => {
        const BASE_URL = "http://127.0.0.1:8000/api";
        try {
          let finalData = {
            name: name,
            start_date: startDate,
            end_date: endDate,
            location_id: locationId
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
          Position Title:{" "}
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Start Date:{" "}
          <input
            type="text"
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>
        <label>
          End Date:{" "}
          <input
            type="text"
            onChange={(event) => setEndDate(event.target.value)}
          />
        </label>
        <label>
          Location Id:{" "}
          <input
            type="text"
            onChange={(event) => setLocationId(event.target.value)}
          />
        </label>
        <button>Create Deployment!</button>
      </form>
    </div>
     );
}
 
export default DeploymentCD;