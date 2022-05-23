import React, { useState } from 'react';

const DepList = ({data}) => {

    const deployments = data.map((loc) => {
        return(
                loc.deployment
    )})

    return ( 
        deployments.map((dep, index) => {
            return(
                <div key={index}>
                    {dep.deployer.first_name} {dep.deployer.last_name}
                </div>
        )})
     );
}
 
export default DepList;