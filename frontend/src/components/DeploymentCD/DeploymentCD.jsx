import React from 'react';
import DeploymentCreate from './DeploymentCreate/DeploymentCreate';
import DeploymentDelete from './DeploymentDelete/DeploymentDelete';
import DeploymentUpdate from './DeploymentUpdate/DeploymentUpdate';

const DeploymentCD = ({locationId}) => {


    return ( 
      <div className="d-flex flex-row justify-content-center">
      <DeploymentCreate locationId={locationId}/>
      <DeploymentUpdate locationId={locationId}/>
      <DeploymentDelete/>
    </div>
     );
}
 
export default DeploymentCD;