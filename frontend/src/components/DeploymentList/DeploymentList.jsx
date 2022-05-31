import React, { useState } from 'react';

const DeploymentList = ({data}) => {
    return ( 
        data.map((el, index) => {
            return (
                    <tr key={index}>
                        <td>
                            {el.id}
                        </td>
                        <td>
                            {el.name}
                        </td>
                        <td>
                            {el.start_date}
                        </td>
                        <td>
                            {el.end_date}
                        </td>
                    </tr>
            )
        })
     );
}
 
export default DeploymentList;