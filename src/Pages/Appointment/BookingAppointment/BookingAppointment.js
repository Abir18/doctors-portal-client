import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingAppointment = ({ booking, date, setIsAppointmentCreated }) => {
  const { name, time, space } = booking;
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    setIsAppointmentCreated(false);
  };
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <BookingModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        booking={booking}
        date={date}
        setIsAppointmentCreated={setIsAppointmentCreated}
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
            onClick={handleOpenModal}
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
