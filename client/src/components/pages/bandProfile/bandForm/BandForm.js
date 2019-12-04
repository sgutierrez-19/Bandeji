import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import BandMemberContext from '../../../../context/bandMember/bandMemberContext';
import { useStyles } from './bandForm.style';

export default function BandForm({ refreshPage }) {
  const classes = useStyles();
  const bandMemberContext = useContext(BandMemberContext);
  const { bandUserMember, updateBand } = bandMemberContext;
  const [bandName, setBandName] = useState('');
  const [bandCity, setBandCity] = useState('');
  const [bandState, setBandState] = useState('');
  const [bandZipcode, setBandZipcode] = useState('');
  const [bandPicture, setBandPicture] = useState('');

  const updateForm = async e => {
    e.preventDefault();
    const obj = {};
    if (bandName) obj.bandName = bandName;
    if (bandCity) obj.city = bandCity;
    if (bandState) obj.state = bandState;
    if (bandZipcode) obj.zipcode = bandZipcode;
    if (bandPicture) obj.bandPicture = bandPicture;
    await updateBand({ ...bandUserMember, ...obj });
    refreshPage();
  };

  return (
    <form noValidate className={classes.form}>
      <Grid container spacing={4} alignContent='center'>
        <CssBaseline />
        <Typography variant='h3' align='center'>
          Update your band
        </Typography>
        <Grid item xs={12} sm={6} md={12}>
          <TextField
            xs={12}
            sm={6}
            md={4}
            variant='standard'
            margin='normal'
            id='bandName'
            label='Name'
            defaultValue={bandUserMember.band.bandName}
            className={classes.nameField}
            onChange={e => setBandName(e.target.value)}
            name='bandName'
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='city'
            label='City'
            defaultValue={bandUserMember.band.city}
            className={classes.addressField}
            onChange={e => setBandCity(e.target.value)}
            name='city'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='state'
            label='State'
            onChange={e => setBandState(e.target.value)}
            defaultValue={bandUserMember.band.state}
            className={classes.addressField}
            name='state'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='zipcode'
            label='Zipcode'
            onChange={e => setBandZipcode(e.target.value)}
            defaultValue={bandUserMember.band.zipcode}
            className={classes.addressField}
            name='zipcode'
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12}>
          <TextField
            variant='standard'
            margin='normal'
            multiline
            rows='2'
            id='bandPicture'
            label='bandPicture'
            onChange={e => setBandPicture(e.target.value)}
            defaultValue={bandUserMember.band.bandPicture}
            className={classes.addressField}
            name='bandPicture'
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12} className={classes.floatRight}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            size='large'
            className={classes.button}
            onClick={updateForm}
          >
            Update
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
}
