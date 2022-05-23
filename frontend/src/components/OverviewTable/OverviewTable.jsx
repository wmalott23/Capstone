import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const OverviewTable = ({data, req_list}) => {

    // const d = new Date()
    // const day = d.getDate()
    // const month = d.getMonth()
    // const year = d.getFullYear()

    const currentDate = '2018-11-01';
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
      ];

    return ( 
    <Paper>
        <Scheduler
          data={schedulerData}
        >
          <ViewState
          />
          <MonthView />
          <Appointments />
        </Scheduler>
    </Paper>
     );
}
 
export default OverviewTable;