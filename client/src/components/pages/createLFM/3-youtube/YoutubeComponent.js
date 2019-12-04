import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFM.style';
import { Fragment, useState, useContext, useEffect } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';

export default function youtube({ prevStep, nextStep }) {
  const classes = useStyles();
  const [newYoutube, setNewYoutube] = useState('');
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing, newListing } = listingsContext;

  useEffect(() => {
    console.log('STATE', newListing);
  }, [newListing]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = { youtubeLink: newYoutube };
    updateNewListing(obj);
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
          Link a video of yourself performing
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='youtube'
                  label='Youtube Link'
                  name='youtube'
                  value={newYoutube}
                  onChange={e => setNewYoutube(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={prevStep}
          >
            Back
          </Button>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={updateListingInProgress}
          >
            Next
          </Button>
        </form>
      </div>
    </Fragment>
  );
}
