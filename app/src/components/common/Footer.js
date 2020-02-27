import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

export default function Footer() {
  return (
    <>
      <Divider/>
      <Typography variant="body2" fontStyle="italic" color="textSecondary" align="center" target="_blank">
        {'Data provided by '}
        <Link color="inherit" href="https://openweathermap.org/api">
          OpenWeatherMap API
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Developed by '}
        <Link color="inherit" href="https://www.linkedin.com/in/guillesalazar" target="_blank">
          Guillermo Salazar
        </Link>{' - '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}
