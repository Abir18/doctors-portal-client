import React, { useState } from 'react';
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Link, NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, isLoading, registerUser, authError } = useAuth();

  const { name, email, password, password2 } = loginData;

  const handleLoginForm = e => {
    e.preventDefault();
    if (password !== password2) {
      alert('Password did not matched');
      return;
    }
    registerUser(name, email, password, history);
  };

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(loginData);
  };

  return (
    <>
      {/* <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/appointment">
        <Button color="inherit">Appointment</Button>
      </Link> */}
      <Navigation></Navigation>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 12 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '30px' }}>
            Register
          </Typography>
          <Container>
            {!isLoading && (
              <>
                <form onSubmit={handleLoginForm}>
                  <TextField
                    sx={{ width: '60%', my: 7 }}
                    id="standard-basic"
                    label="Your Name"
                    variant="standard"
                    name="name"
                    onBlur={handleOnBlur}
                  />
                  <TextField
                    sx={{ width: '60%', mb: 7 }}
                    id="standard-basic"
                    label="Your email"
                    variant="standard"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                  />
                  <TextField
                    sx={{ width: '60%', mb: 7 }}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                  />
                  <TextField
                    sx={{ width: '60%', mb: 10 }}
                    id="standard-basic"
                    label="Retype Your Password"
                    variant="standard"
                    name="password2"
                    type="password"
                    onBlur={handleOnBlur}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      padding: '10px 70px',
                      background:
                        'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
                      width: '60%',
                    }}
                  >
                    Register
                  </Button>
                </form>
                <NavLink to="/login">
                  <Button sx={{ my: 3 }} variant="text">
                    Already Registered? Login
                  </Button>
                </NavLink>
              </>
            )}
            {isLoading && <CircularProgress sx={{ mt: 7 }} />}
            {user?.email && (
              <Alert severity="success">User Created Successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '70%', marginTop: '70px' }} src={login} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
