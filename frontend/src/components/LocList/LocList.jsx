import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LocList = ({data}) => {


    return ( 
        data.map((loc, index) => {
            let url = `loc/${loc.id}`
            return(
                <div key={index}>
                <Link to={url}>
                    {loc.name}
                </Link>
                </div>
        )})
     );
}
 
export default LocList;