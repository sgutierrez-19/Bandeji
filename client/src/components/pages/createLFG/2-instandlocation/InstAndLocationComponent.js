import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFG.style';
import { Fragment, useState, useContext, useEffect } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';
import UserMemberContext from '../../../../context/userMember/userMemberContext';

export default function lfgInstLocation({ prevStep, nextStep }) {
  const classes = useStyles();
  const [newInstrument, setNewInstrument] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newState, setNewState] = useState('');
  const [newZipcode, setNewZipcode] = useState('');
  const listingsContext = useContext(ListingsContext);
  const userMemberContext = useContext(UserMemberContext);
  const { updateNewListing, newListing } = listingsContext;
  const { instruments } = userMemberContext;

  useEffect(() => {
    console.log('STATE', newListing);
  }, [newListing]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = {
      instrument: newInstrument,
      city: newCity,
      state: newState,
      zipcode: newZipcode
    };
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
          Confirm the following for your listing:
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>
                  Main Instrument
                </InputLabel>
                <Select
                  value={newInstrument}
                  onChange={e => setNewInstrument(e.target.value)}
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                >
                  {instruments.map(instrument => {
                    return (
                      <MenuItem key={instrument} value={instrument}>
                        {instrument}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
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
                  autofi
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
