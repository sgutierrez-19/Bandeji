import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../createSignup.style';
import { Fragment } from 'react';

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h2'>
          Do you have another member to add to your band?
        </Typography>
        <form className={classes.form} noValidate>
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
        </form>
      </div>
    </Fragment>
  );
}
