import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import Login from './login/Login';

import { useStyles } from './landingPage.style';

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      component='main'
      className={classes.root}
      alignContent='center'
    >
      <CssBaseline />
      <Grid item xs={12} sm={7} md={9} className={classes.image}>
        <div className={classes.callToAction}>
          <Typography variant='h1' align='center' className={classes.text}>
            Connect
          </Typography>
          <Typography variant='h3' align='center' className={classes.text}>
            With <b>local</b> musicians around
          </Typography>
          <Typography variant='h1' align='center' className={classes.text}>
            <b>You!</b>
          </Typography>
          <Link to='/signup' className={classes.title}>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              size='large'
              className={classes.button}
            >
              Get Started
            </Fab>
          </Link>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={5}
        md={3}
        component={Paper}
        elevation={6}
        square
        className={classes.login}
      >
        <Login />
      </Grid>
    </Grid>
  );
}
