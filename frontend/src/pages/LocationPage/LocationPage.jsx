import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";

//Importing Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import DeploymentCD from '../../components/DeploymentCD/DeploymentCD';


const LocationPage = () => {

    const {locationId} = useParams();
    const [user, token] = useAuth();
    const [location, setLocation] = useState({})

    const fetchLocation = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/locations/${locationId}`)
          setLocation(response.data)
        } catch (error) {
          console.log(error.message)
        }
      }



    useEffect(() => {
        fetchLocation()
    }, []);

    return (
    <div className="container">
        <h1>{location.name} Details</h1>
        <OverviewTable/>
        <DeploymentCD/>
    </div>
     );
}
 
export default LocationPage;