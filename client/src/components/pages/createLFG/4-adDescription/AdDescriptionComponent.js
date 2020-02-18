import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFG.style';
import { Fragment, useState, useContext } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';

export default function AdDescription({ prevStep, nextStep }) {
  const classes = useStyles();
  const [newAd, setNewAd] = useState('');
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing, addLFG, newListing } = listingsContext;

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = { ad: newAd };
    updateNewListing(obj);
    addLFG({ ...newListing, ...obj });
    nextStep();
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAddOutlinedIcon />
        </Avatar>
        <Typography className={classes.subHeader} component='h4' variant='h4'>
          Tell everyone about yourself and
          <br />
          describe what kind of band
          <br />
          you are looking to join:
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  multiline
                  rows='3'
                  required
                  fullWidth
                  id='ad'
                  label='Ad Description'
                  name='ad'
                  value={newAd}
                  onChange={e => setNewAd(e.target.value)}
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
                Finish
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Fragment>
  );
}
