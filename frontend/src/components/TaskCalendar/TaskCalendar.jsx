import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const TaskCalendar = ({dates}) => {

    const today = new Date().toISOString()
    const todayHours = new Date(today)
    const todayStart = new Date(today)
    const todayEnd = new Date(today)
    todayEnd.setMinutes(todayEnd.getMinutes()+30)
    const todaySchedule = []
    const currentDate = today;
    for(let i=0; i<dates.length; i++){
      let tempStart = new Date(todayStart)
      let tempEnd = new Date(todayEnd)
      if(dates[i].startDate<today && today<dates[i].endDate){
        todaySchedule.push({startDate: tempStart, endDate: tempEnd, title: dates[i].title})
        todayStart.setMinutes(todayStart.getMinutes()+30)
        todayEnd.setMinutes(todayEnd.getMinutes()+30)
      }
    }
    const schedulerData = todaySchedule
    // [
    // { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    // { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    // ];


    return ( 
    <div className="m-4 border border-primary rounded">
      <h3>Today's schedule</h3>
      <Paper className="m-4 border border-primary rounded">
          <Scheduler
            data={schedulerData}
            >
            <ViewState
              currentDate={currentDate}
              />
            <DayView
              startDayHour={todayHours.getHours()}
              endDayHour={todayEnd.getHours()+.5}
              />
            <Appointments />
          </Scheduler>
      </Paper>
    </div>
     );
}
 
export default TaskCalendar;