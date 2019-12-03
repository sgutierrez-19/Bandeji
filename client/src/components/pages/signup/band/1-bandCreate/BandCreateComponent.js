import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../createSignup.style';
import { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../../../../context/auth/authContext';

export default function BandCreateComponent({
  doublePrevStep,
  doubleNextStep
}) {
  const classes = useStyles();
  const [newBandName, setNewBandName] = useState('');
  const [newBandCity, setNewBandCity] = useState('');
  const [newBandState, setNewBandState] = useState('');
  const [newBandZipcode, setNewBandZipcode] = useState('');
  const [newBandPicture, setNewBandPicture] = useState('');
  const authContext = useContext(AuthContext);
  const { updateCreateNewUserMember, createNewUserMember } = authContext;

  useEffect(() => {
    console.log('STATE', createNewUserMember);
  }, [createNewUserMember]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = {
      bandName: newBandName,
      bandCity: newBandCity,
      bandState: newBandState,
      bandZipcode: newBandZipcode,
      bandPicture: newBandPicture
    };
    updateCreateNewUserMember(obj);
    doubleNextStep();
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h2'>
          Tell us about your band...
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
                  id='bandname'
                  label='Band Name'
                  name='bandname'
                  value={newBandName}
                  onChange={e => setNewBandName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  required
                  fullWidth
                  id='bandcity'
                  label='City'
                  name='bandcity'
                  value={newBandCity}
                  onChange={e => setNewBandCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  required
                  fullWidth
                  id='bandstate'
                  label='State'
                  name='bandstate'
                  value={newBandState}
                  onChange={e => setNewBandState(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  required
                  fullWidth
                  id='bandzipcode'
                  label='Zipcode'
                  name='bandzipcode'
                  value={newBandZipcode}
                  onChange={e => setNewBandZipcode(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  required
                  fullWidth
                  id='bandPicture'
                  label='Band Picture'
                  name='bandPicture'
                  value={newBandPicture}
                  onChange={e => setNewBandPicture(e.target.value)}
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
            onClick={doublePrevStep}
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
