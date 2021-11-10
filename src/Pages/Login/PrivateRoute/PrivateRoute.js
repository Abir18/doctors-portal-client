import { CircularProgress, LinearProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <>
        {/* <CircularProgress color="success" sx={{ mt: 3 }} /> */}
        <LinearProgress color="secondary" sx={{ margin: '20px auto' }} />
      </>
    );
  }
  return (
    <>
      {/* {isLoading && <CircularProgress />} */}
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
