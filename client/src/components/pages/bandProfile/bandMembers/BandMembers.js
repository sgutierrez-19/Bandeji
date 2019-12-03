import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import Fab from '@material-ui/core/Fab';

import { useStyles } from './bandMembers.style';
import instruments from '../../../../instruments/instruments';
// const instruments = [
//   'Accordion',
//   'Banjo',
//   'Cello',
//   'Clarinet',
//   'Drums',
//   'Flute',
//   'Guitar',
//   'Guitar-Bass',
//   'Keyboard',
//   'Obo',
//   'Piano',
//   'Trumpet',
//   'Voice-Any',
//   'Voice-Soprano',
//   'Voice-Alto',
//   'Voice-Tenor',
//   'Voice-Bass',
//   'Violin',
//   'Viola'
// ];

export default function BandMembers() {
  const classes = useStyles();
  const [instrument, setInstrument] = useState();
  const handleChange = event => {
    setInstrument(event.target.value);
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <Typography
          variant='h4'
          align='center'
          className={classes.bandMembersTitle}
        >
          Members
        </Typography>
        <form noValidate className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} alignContent='center'>
              <TextField
                item
                xs={12}
                sm={6}
                md={4}
                variant='outlined'
                margin='normal'
                id='name'
                label='Name'
                className={classes.nameField}
                name='name'
                autoComplete='name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} alignContent='center'>
              <TextField
                variant='outlined'
                id='instruments'
                select
                label='Instrument'
                className={classes.textField}
                value={instrument}
                onChange={handleChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin='normal'
              >
                {instruments.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} alignContent='center'>
              <Fab
                variant='extended'
                color='success'
                aria-label='add'
                size='small'
                className={classes.buttonSuccess}
              >
                Add
              </Fab>
              <Fab
                variant='extended'
                color='primary'
                aria-label='add'
                size='small'
                className={classes.buttonPrimary}
              >
                Update
              </Fab>
              <Fab
                variant='extended'
                color='danger'
                aria-label='add'
                size='small'
                className={classes.buttonDanger}
              >
                Delete
              </Fab>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
