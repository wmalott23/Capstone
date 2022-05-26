import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

//Import Components
import StepsCRUD from '../../components/StepsCRUD/StepsCRUD';
import ReqBreakOut from '../../components/ReqBreakOut/ReqBreakOut';
import ReqCRUD from '../../components/ReqCRUD/ReqCRUD';
import ReqListCRUD from '../../components/ReqListCRUD/ReqListCRUD';

const DepDetailsPage = () => {

    const [user, token] = useAuth();



    // const d = new Date()
    // const day = d.getDate()
    // const month = d.getMonth()+1
    // const year = d.getFullYear()

    // const currentDate = `${year}-0${month}-${day}`;
    // const schedulerData = [
    //     { startDate: `${currentDate}T11:00`, endDate: `${}T12:00`, title: 'Meeting' },
    //     { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
    //     { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
    //     { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
    //   ];


    return ( 
    <div className="container">
        <ReqBreakOut/>
        <ReqListCRUD/>
        <ReqCRUD/>
        <StepsCRUD/>
    </div>     
    );
}
 
export default DepDetailsPage;