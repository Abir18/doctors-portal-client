import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = props => {
  const { name, description, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          style={{
            width: 'auto',
            height: '80px',
            margin: '0 auto',
          }}
          component="img"
          image={img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ mb: 3 }} variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="h6" color="text.disabled">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
