import React, { useState } from 'react';

const OverviewTable = ({data, dataNames}) => {

    const d = new Date()
    const day = d.getDate()
    const month = d.getMonth()
    const year = d.getFullYear()
    const req_list = data.deployment.requirement_list



    return ( 
        <div>
            {console.log(data)}
            {
                data.map((index) => {
                    return (
                        <div key={index}>
                            <h1>{data.name}</h1>
                            {data.deployment.map((index) => {
                                <div key={index}>
                                <h3 >{data.deployment.name}, {data.deployment.deployer.first_name} {data.deployment.deployer.last_name}</h3>
                                {req_list.map((index) => {
                                    <div key={index}>
                                        <h4>{req_list.requirement.name}</h4>
                                        {req_list.requirement.step.map((index) =>{
                                            <div key={index}>
                                                <p>{req_list.requirement.step.name}</p>
                                            </div>
                                        })}
                                    </div>
                                })}
                                </div>
                            })}
                        </div>
                    )})
            }
        </div>
     );
}
 
export default OverviewTable;