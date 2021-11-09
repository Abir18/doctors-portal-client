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
import { Link, NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, registerUser, authError } = useAuth();

  // const { email, password } = loginData;

  const handleLoginForm = e => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert('Password did not matched');
      return;
    }
    registerUser(loginData.email, loginData.password);
  };

  const handleOnChange = e => {
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
      <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/appointment">
        <Button color="inherit">Appointment</Button>
      </Link>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 24 }}>
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
                    label="Your email"
                    variant="standard"
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                  />
                  <TextField
                    sx={{ width: '60%', mb: 7 }}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    onChange={handleOnChange}
                  />
                  <TextField
                    sx={{ width: '60%', mb: 10 }}
                    id="standard-basic"
                    label="Retype Your Password"
                    variant="standard"
                    name="password2"
                    type="password"
                    onChange={handleOnChange}
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
                  <Button variant="text">Already Registered? Login</Button>
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
