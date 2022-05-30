import React from 'react';
import DeploymentCreate from './DeploymentCreate/DeploymentCreate';
import DeploymentDelete from './DeploymentDelete/DeploymentDelete';
import DeploymentUpdate from './DeploymentUpdate/DeploymentUpdate';

const DeploymentCD = (props) => {


    return ( 
    <div className="container">
      <DeploymentCreate/>
      <DeploymentUpdate/>
      <DeploymentDelete/>
    </div>
     );
}
 
export default DeploymentCD;