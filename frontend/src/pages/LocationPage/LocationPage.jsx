import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";

//Importing Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import DeploymentCD from '../../components/DeploymentCD/DeploymentCD';


const LocationPage = () => {

    const [user, token] = useAuth();


    return ( 
    <div className="container">
        <OverviewTable/>
        <DeploymentCD/>
    </div>
     );
}
 
export default LocationPage;