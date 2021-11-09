import React from 'react';
import Service from '../Service/Service';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const services = [
  {
    name: 'Cavity',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam sint ',
    img: cavity,
  },
  {
    name: 'Fluoride',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam sint ',
    img: fluoride,
  },
  {
    name: 'Teeth Whitening',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam sint ',
    img: whitening,
  },
];

const Services = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ fontWeight: 700, mt: 5, mb: 3 }}
          variant="h5"
          component="div"
          color="#5Ce7ed"
        >
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 600, mb: 10 }}
          variant="h4"
          component="div"
        >
          Services We Provide
        </Typography>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map(service => (
              <Service key={service.name} service={service} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
