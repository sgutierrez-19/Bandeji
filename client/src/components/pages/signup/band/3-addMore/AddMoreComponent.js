import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../createSignup.style';
import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

export default function youtube({ prevStep, nextStep, doubleNextStep }) {
  const classes = useStyles();

  const finishSignup = e => {
    e.preventDefault();
    doubleNextStep();
  };

  const addNewBandMember = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LiveHelpOutlinedIcon />
        </Avatar>
        <Typography className={classes.subHeader} component='h4' variant='h4'>
          Do you have another member to add to your band?
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={addNewBandMember}
              >
                Yes, I do
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={finishSignup}
              >
                No, I'm done
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Fragment>
  );
}
