import { Grid, Box, Typography, Button } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
  background: `url(${bg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '700px',
};

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 750,
};

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: 'left' }}
          item
          xs={12}
          md={5}
        >
          <Box style={{ marginLeft: '200px' }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600 }}
              color="text.danger"
            >
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 5, fontSize: 16, fontWeight: 300, color: 'gray' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              vero doloribus quod repudiandae impedit doloremque enim inventore
              deserunt necessitatibus, adipisci eius magnam dolorum similique!
              Animi dolorum quam praesentium vitae provident pariatur eveniet
              magnam dolores, iure
            </Typography>
            <Button
              variant="contained"
              style={{
                padding: '10px 40px',
                background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
              }}
            >
              GET APPOINTMENT
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} style={{ ...verticalCenter }}>
          <img style={{ width: '600px' }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
