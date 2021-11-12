import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AppointmentsBooked = ({ date }) => {
  //   console.log(date, 'd');
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  const dateFormat = date.toLocaleDateString();

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user.email}&date=${dateFormat}`;
    axios.get(url).then(res => {
      setAppointments(res.data);
    });
  }, [date]);

  const appointmentCount = () => {
    if (appointments.length === 0) {
      return 'No Appointment Found';
    }
    if (appointments.length === 1) {
      return '1 Appointment Found';
    }
    if (appointments.length > 1) {
      //   return appointments.length + ' Appointments Found';
      return `${appointments.length} Appointments Found`;
    }
    // else {
    //     return `${appointments.length} Appointments Found`;
    //   }
  };

  return (
    <>
      <h2>Appointment Scheduled on {date.toDateString()}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: 700, fontSize: 16 }}>
                Patient Name
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 700, fontSize: 16 }}>
                Time
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 700, fontSize: 16 }}>
                Service
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 700, fontSize: 16 }}>
                Email
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 700, fontSize: 16 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map(row => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                  {new Date(row.date).toDateString()}
                  <br />
                  <span>{row.time}</span>
                </TableCell>
                <TableCell align="left">{row.bookingName}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <a>Edit </a>
                  <a style={{ marginLeft: '12px' }}>Delete</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h4>{appointmentCount()}</h4>

      {/* Multiple If Else Using Ternary Operator */}
      {/* {appointments.length === 0 ? (
        <h4>No Appointment Found</h4>
      ) : appointments.length === 1 ? (
        <h4>1 Appointment Found</h4>
      ) : (
        <h4>{appointments.length} Appointments Found</h4>
      )} */}
    </>
  );
};

export default AppointmentsBooked;
