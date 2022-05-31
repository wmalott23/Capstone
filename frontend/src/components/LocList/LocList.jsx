import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LocList = ({data}) => {


    return ( 
        data.map((loc, index) => {
            let url = `loc/${loc.id}`
            return(
                <tr key={index}>
                    <Link to={url}>
                        {loc.name}
                    </Link>
                </tr>
        )})
     );
}
 
export default LocList;