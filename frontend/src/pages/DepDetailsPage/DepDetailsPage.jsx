import React, { useState, useEffect } from 'react';

//Import Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import StepsCRUD from '../../components/StepsCRUD/StepsCRUD';

const DepDetailsPage = () => {

    const [user, token] = useAuth();



    const d = new Date()
    const day = d.getDate()
    const month = d.getMonth()+1
    const year = d.getFullYear()

    const currentDate = `${year}-0${month}-${day}`;
    const schedulerData = [
        { startDate: `${currentDate}T11:00`, endDate: `${data.startDate}T12:00`, title: 'Meeting' },
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
      ];


    return ( 
    <div className="container">
        <OverviewTable/>
        <StepsCRUD/>
    </div>     
    );
}
 
export default DepDetailsPage;