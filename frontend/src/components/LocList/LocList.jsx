import React, { useState } from 'react';

const LocList = ({data}) => {


    return ( 
        data.map((loc, index) => {
            return(
                <div key={index}>
                    {loc.name}
                </div>
        )})
     );
}
 
export default LocList;