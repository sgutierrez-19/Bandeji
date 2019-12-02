import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFG.style';
import { Fragment, useState, useContext, useEffect } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';

export default function AdDescription() {
  const classes = useStyles();
  const [newAd, setNewAd] = useState('');
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing, addLFG, newListing } = listingsContext;

  useEffect(() => {
    console.log('STATE', newListing);
  }, [newListing]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = { ad: newAd };
    updateNewListing(obj);
    addLFG({ ...newListing, ...obj });
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h2'>
          Tell everyone a bit more about yourself and what you're looking for:
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
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
