import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';

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

const BookingModal = ({ open, handleClose, booking, date }) => {
  const { name, time, space } = booking;
  const handleModalForm = e => {
    e.preventDefault();
    alert('Form Submitted');
    handleClose();
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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
                  value={time}
                  disabled
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Name"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="number"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
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
