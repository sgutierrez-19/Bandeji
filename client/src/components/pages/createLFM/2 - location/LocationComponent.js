import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFM.style';
import { Fragment, useState, useContext } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';
import BandMemberContext from '../../../../context/bandMember/bandMemberContext';

export default function lfgInstLocation({ prevStep, nextStep }) {
  const classes = useStyles();
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing } = listingsContext;
  const bandMemberContext = useContext(BandMemberContext);
  const { bandUserMember } = bandMemberContext;
  const [newCity, setNewCity] = useState(bandUserMember.band.city);
  const [newState, setNewState] = useState(bandUserMember.band.state);
  const [newZipcode, setNewZipcode] = useState(bandUserMember.band.zipcode);

  const updateListingInProgress = async e => {
    e.preventDefault();
    let obj = { city: newCity, state: newState, zipcode: newZipcode };
    updateNewListing(obj);
    nextStep();
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocationOnOutlinedIcon />
        </Avatar>
        <Typography className={classes.subHeader} component='h4' variant='h4'>
          Confirm your band's location:
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}> */}
            <Grid item xs={4} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='city'
                label='City'
                name='city'
                value={newCity}
                onChange={e => setNewCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='state'
                label='State'
                name='state'
                value={newState}
                onChange={e => setNewState(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='zipcode'
                label='Zip Code'
                id='zipcode'
                value={newZipcode}
                onChange={e => setNewZipcode(parseInt(e.target.value))}
              />
            </Grid>
            {/* </Grid> */}
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
