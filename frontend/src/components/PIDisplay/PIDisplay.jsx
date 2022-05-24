import React, { useState } from 'react';


const PIDisplay = (props) => {

    const data = props.data

    return ( 
        <div className="container">
            <div>
                {data.first_name}
            </div>
            <div>
                {data.last_name}
            </div>
            <div>
                {data.email}
            </div>
            <div>
                {data.address}
            </div>
            <div>
                {data.phone_number}
            </div>
            <div>
                {data.cac_exp}
            </div>
            <div>
                {data.pass_num}
            </div>
            <div>
                {data.pass_exp}
            </div>
            <div>
                {data.visa_name}
            </div>
            <div>
                {data.visa_id}
            </div>
            <div>
                {data.visa_exp}
            </div>
            <div>
                {data.cbts}
            </div>
            <div>
                {data.med_requested}
            </div>
            <div>
                {data.med_scheduled}
            </div>
            <div>
                {data.med_exp}
            </div>
            <div>
                {data.dent_scheduled}
            </div>
            <div>
                {data.dent_exp}
            </div>
            <div>
                {data.loa_exp}
            </div>
        </div>
     );
}
 
export default PIDisplay;