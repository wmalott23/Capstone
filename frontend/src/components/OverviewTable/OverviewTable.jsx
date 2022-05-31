import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const OverviewTable = ({dates}) => {

    const schedulerData = dates

    return ( 
        <Paper className="m-4 border border-primary rounded">
            <Scheduler
            data={schedulerData}
            >
            <ViewState
            />
            <MonthView intervalCount={1}/>
            <Appointments />
            </Scheduler>
        </Paper>
     );
}
 
export default OverviewTable;