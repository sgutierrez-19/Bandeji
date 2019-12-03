import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../createSignup.style';
import { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../../../../context/auth/authContext';
import UserMemberContext from '../../../../../context/userMember/userMemberContext';

export default function youtube({ doublePrevStep, nextStep }) {
  const classes = useStyles();
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newState, setNewState] = useState('');
  const [newZipcode, setNewZipcode] = useState('');
  const [newInstrument, setNewInstrument] = useState('');
  const [newPicture, setNewPicture] = useState('');
  const authContext = useContext(AuthContext);
  const {
    updateCreateNewUserMember,
    register,
    createNewUserMember
  } = authContext;
  const userMemberContext = useContext(UserMemberContext);
  const { instruments } = userMemberContext;

  useEffect(() => {
    console.log('STATE', createNewUserMember);
  }, [createNewUserMember]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = {
      name: newName,
      city: newCity,
      state: newState,
      zipcode: newZipcode,
      instrument: newInstrument,
      profilePicture: newPicture
    };
    updateCreateNewUserMember(obj);
    register({ ...createNewUserMember, ...obj });
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
          Almost there...
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
                  id='name'
                  label='First Name'
                  name='name'
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
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
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
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
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  required
                  fullWidth
                  id='zipcode'
                  label='Zipcode'
                  name='zipcode'
                  value={newZipcode}
                  onChange={e => setNewZipcode(e.target.value)}
                />
              </Grid>
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
              <Grid item xs={12} sm={12}>
                <TextField
                  className='adTextBoxHeight'
                  variant='outlined'
                  required
                  fullWidth
                  id='profilePicture'
                  label='Profile Picture'
                  name='profilePicture'
                  value={newPicture}
                  onChange={e => setNewPicture(e.target.value)}
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