import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
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
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
  {
    id: 4,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
  {
    id: 5,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
  {
    id: 6,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
];

const AvailableAppointment = ({ date }) => {
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

      <Container>
        <Grid container rowSpacing={8} columnSpacing={4}>
          {bookings.map(booking => (
            <BookingAppointment
              key={booking.id}
              booking={booking}
              date={date}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AvailableAppointment;
