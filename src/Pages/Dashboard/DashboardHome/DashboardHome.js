import React from 'react';
import { Button, Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import AppointmentsBooked from '../AppointmentsBooked/AppointmentsBooked';

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Calendar date={date} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppointmentsBooked date={date}></AppointmentsBooked>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
