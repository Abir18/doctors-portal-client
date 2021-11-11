import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '30px',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openModal,
  handleCloseModal,
  booking,
  date,
  setIsAppointmentCreated,
}) => {
  const { user } = useAuth();
  const defaultBookingInfo = {
    name: user.displayName,
    email: user.email,
  };
  const [bookingInfo, setBookingInfo] = useState(defaultBookingInfo);
  const { name, time, space } = booking;

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    // console.log(newBookingInfo);
    setBookingInfo(newBookingInfo);
  };

  const handleModalForm = e => {
    e.preventDefault();

    const appointment = {
      ...bookingInfo,
      bookingName: name,
      time,
      date: date.toLocaleDateString(),
    };

    axios
      .post('http://localhost:5000/appointments', appointment)
      .then(response => {
        console.log(response);
        const { data } = response;
        if (data.insertedId) {
          handleCloseModal();
          setIsAppointmentCreated(true);
          // alert('New Appointment Created');
        }
      })
      .catch(error => {
        console.log(error);
      });

    // fetch('http://localhost:5000/appointments', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(appointment),
    // });
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(function (error) {
    //   console.log(error);
    // });

    // console.log(appointment, 'apo');

    // alert('Form Submitted');
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{
                my: 5,
                color: '#1CC7C1',
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              {name}
            </Typography>
            <form onSubmit={handleModalForm}>
              <Container>
                <TextField
                  fullWidth
                  id="fullWidth"
                  disabled
                  value={time}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  defaultValue={user.displayName}
                  onBlur={handleOnBlur}
                  required
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  onBlur={handleOnBlur}
                  required
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  // defaultValue="Phone Number"
                  onBlur={handleOnBlur}
                  required
                  // type="number"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  disabled
                  value={date?.toDateString()}
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    padding: '10px 70px',
                    background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
                    float: 'right',
                  }}
                >
                  SEND
                </Button>
              </Container>
            </form>
          </Box>
        </Fade>
      </Modal>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {time}
          </Typography>
        </Box>
      </Modal> */}
    </>
  );
};

export default BookingModal;
