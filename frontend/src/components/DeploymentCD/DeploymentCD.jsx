import React from 'react';
import DeploymentCreate from './DeploymentCreate/DeploymentCreate';
import DeploymentDelete from './DeploymentDelete/DeploymentDelete';
import DeploymentUpdate from './DeploymentUpdate/DeploymentUpdate';

const DeploymentCD = ({locationId}) => {


    return ( 
    <div className="container">
      <DeploymentCreate locationId={locationId}/>
      <DeploymentUpdate locationId={locationId}/>
      <DeploymentDelete/>
    </div>
     );
}
 
export default DeploymentCD;