import React, { useState } from 'react';
import axios from 'axios';


const StepsCRUD = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [length, setLength] = useState('')
    const [isServerError, setIsServerError] = useState(false);


    const handleSubmit = async () => {
        const BASE_URL = "http://127.0.0.1:8000/api";
        try {
          let finalData = {
            name: name,
            description: description,
            length: length,
          };
          let response = await axios.post(`${BASE_URL}/steps/`, finalData);
          if (response.status === 201) {
            console.log("Successful created Deployer!");
            setIsServerError(false);
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
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            onChange={(event) => setLength(event.target.value)}
          />
        </label>
        <button>Create Step!</button>
      </form>
    </div>
     );
}
 
export default StepsCRUD;