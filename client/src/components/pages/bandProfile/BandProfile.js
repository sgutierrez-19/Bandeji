import React from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField'
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BandCard from './bandCard/BandCard';
import BandForm from './bandForm/BandForm';
import BandMembers from './bandMembers/BandMembers';

import { useStyles } from './bandProfile.style';

export default function BandProfile() {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <BandCard />
        </div>
      </Grid>
      <Grid
        item
        xs={false}
        sm={6}
        md={8}
        className={classes.profile}
        alignContent='center'
      >
        <Typography variant='h3' align='center'>
          The Lizards
        </Typography>
        <div>
          <BandForm />
          <BandMembers />
        </div>
      </Grid>
    </Grid>
  );
}
