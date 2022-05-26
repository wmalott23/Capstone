import React, { useState } from 'react';

const DepList = ({data}) => {


    return ( 
        data.map((el, index) => {
            return (
                <div key={index}>
                   {el.last_name}
                </div>
            )
        })
     );
}
 
export default DepList;