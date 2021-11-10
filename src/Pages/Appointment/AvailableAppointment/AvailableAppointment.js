import React, { useState } from 'react';
import { Alert, Container, Grid, Typography } from '@mui/material';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const bookings = [
  {
    id: 1,
    name: 'Teeth Orthodontics',
    time: '08.00 AM - 09.00 AM',
    space: 10,
  },
  {
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
  {
    id: 3,
    name: 'Teeth Cleaning',
    time: '05.00 PM - 7.00 PM',
    space: 8,
  },
  {
    id: 4,
    name: 'Cavity Protection',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
  {
    id: 5,
    name: 'Oral Dentistry',
    time: '09.00 AM - 03.00 PM',
    space: 8,
  },
  {
    id: 6,
    name: 'Cavity Dentistry',
    time: '05.00 PM - 10.00 PM',
    space: 8,
  },
];

const AvailableAppointment = ({ date }) => {
  const [isAppointmentCreated, setIsAppointmentCreated] = useState(false);
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          my: 8,
          color: '#1CC7C1',
          fontWeight: 700,
        }}
      >
        Available Appointments on {date?.toDateString()}
      </Typography>

      {isAppointmentCreated && (
        <Alert severity="success" sx={{ mb: 8, float: 'center' }}>
          Appointment Created Successfully!
        </Alert>
      )}

      <Container>
        <Grid container rowSpacing={8} columnSpacing={4}>
          {bookings.map(booking => (
            <BookingAppointment
              key={booking.id}
              booking={booking}
              date={date}
              setIsAppointmentCreated={setIsAppointmentCreated}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AvailableAppointment;
