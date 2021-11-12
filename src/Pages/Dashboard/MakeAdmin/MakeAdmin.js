import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  //   console.log(email, 'e');
  const handleOnBlur = e => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = e => {
    const user = { email };
    // console.log(user);
    e.preventDefault();
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
        if (data.modifiedCount === 0) {
          setSuccess(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          onBlur={handleOnBlur}
          type="email"
          label="Email"
          variant="standard"
          sx={{ width: '30%' }}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
        {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        {!success && <Alert severity="error">User Not Found</Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
