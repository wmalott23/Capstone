import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const TaskCalendar = ({dates}) => {

    const today = new Date().toISOString()
    const todaySchedule = []
    const currentDate = today;
    for(let i=0; i<dates.length; i++){
      if(dates[i].startDate<today && today<dates[i].endDate){
        todaySchedule.push({startDate: today, endDate: today, title: dates[i].title})
      }
    }
    const schedulerData = todaySchedule
    // [
    // { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    // { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    // ];


    return ( 
    <Paper>
        <Scheduler
          data={schedulerData}
        >
          <ViewState
            currentDate={currentDate}
          />
          <DayView
            startDayHour={9}
            endDayHour={14}
          />
          <Appointments />
        </Scheduler>
    </Paper>
     );
}
 
export default TaskCalendar;