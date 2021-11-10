import React, { useState } from 'react';
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import login from '../../../images/login.png';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInUser, signInWithGoogle, isLoading, authError, setAuthError } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const { email, password } = loginData;

  const handleLoginForm = e => {
    e.preventDefault();
    setAuthError('');
    signInUser(email, password, location, history);
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

  const handleGoogleSignIn = () => {
    setAuthError('');

    signInWithGoogle(location, history);
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
        <Grid item xs={12} md={6} sx={{ mt: 24 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '30px' }}>
            Login
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
                    onBlur={handleOnChange}
                  />
                  <TextField
                    sx={{ width: '60%', mb: 10 }}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    onBlur={handleOnChange}
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
                    Sign in
                  </Button>
                </form>

                <NavLink to="/register">
                  <Button sx={{ mt: 3 }} variant="text">
                    New User? Please Register
                  </Button>
                </NavLink>
              </>
            )}
            {isLoading && <CircularProgress sx={{ mt: 7 }} />}
            {!isLoading && (
              <>
                <p>----------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">
                  Google Sign In
                </Button>
              </>
            )}

            {/* {isLoading && <LinearProgress sx={{ mt: 7 }} />} */}
            {authError && (
              <Alert sx={{ mt: 5 }} severity="error">
                {authError}
              </Alert>
            )}
          </Container>
        </Grid>

        <Grid item xs={12} md={6}>
          <img style={{ width: '70%', marginTop: '70px' }} src={login} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
