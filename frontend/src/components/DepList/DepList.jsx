import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DepList = ({data}) => {


    return ( 
        data.map((el, index) => {
            let url = `dep/${el.id}`
            return (
                <tr key={index}>
                <Link to={url}>
                    {el.last_name}
                </Link>
                </tr>
            )
        })
     );
}
 
export default DepList;