import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const OverviewTable = ({data}) => {

    const d = new Date()
    const day = d.getDate()
    const month = d.getMonth()+1
    const year = d.getFullYear()

    const currentDate = `${year}-0${month}-${day}`;
    const schedulerData = [
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Meeting' },
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'swimming' },
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'swimming meeting' },
        { startDate: `${currentDate}T11:00`, endDate: `${currentDate}T12:00`, title: 'Other' },
      ];

    return ( 
        <Paper>
            <Scheduler
            data={schedulerData}
            >
            <ViewState
            />
            <MonthView intervalCount={2}/>
            <Appointments />
            </Scheduler>
        </Paper>
     );
}
 
export default OverviewTable;