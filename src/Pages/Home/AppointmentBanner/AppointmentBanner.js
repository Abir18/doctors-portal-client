import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
  background: `url(${bg})`,
  backgroundSize: '120%',
  //   backgroundRepeat: 'no-repeat',
  backgroundColor: 'rgba(45,58,74,0.95)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: '180px',
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            alt=""
            style={{ width: 700, marginTop: '-180px' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ mb: 3 }}
              style={{ color: '#5CE7ED' }}
            >
              Appointment
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }} style={{ color: 'white' }}>
              Make an appointment <br /> Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 7 }}
              style={{ color: 'white', fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              aspernatur? Aperiam cum recusandae officiis esse! recusandae
              officiis esse!
            </Typography>
            <Button
              variant="contained"
              style={{
                padding: '10px 40px',
                background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
