import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFM.style';
import { Fragment, useState, useContext } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';

export default function youtube({ prevStep, nextStep }) {
  const classes = useStyles();
  const [newYoutube, setNewYoutube] = useState('');
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing } = listingsContext;

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
          <VideoCallOutlinedIcon />
        </Avatar>
        <Typography
          className={classes.subHeader}
          classNamecomponent='h4'
          variant='h4'
        >
          Link a video
          <br />
          of your band performing:
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
          <Grid container spacing={2}>
            <Grid item xs={5}>
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
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
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
            </Grid>
          </Grid>
        </form>
      </div>
    </Fragment>
  );
}
