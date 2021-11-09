import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingAppointment = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <BookingModal
        open={open}
        handleClose={handleClose}
        booking={booking}
        date={date}
      ></BookingModal>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ py: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 1, color: '#1CC7C1', fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: 700 }}>
            {time}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ mb: 2, color: 'text.secondary' }}
          >
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            style={{
              padding: '7px 20px',
              background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
              fontSize: '16px',
              // border: 'none',
              fontWeight: 700,
            }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default BookingAppointment;
