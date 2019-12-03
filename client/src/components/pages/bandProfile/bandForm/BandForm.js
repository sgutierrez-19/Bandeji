import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

import { useStyles } from './bandForm.style';

export default function BandForm() {
  const classes = useStyles();

  return (
    <form noValidate className={classes.form}>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12} sm={6} md={12}>
          <TextField
            xs={12}
            sm={6}
            md={4}
            variant='standard'
            margin='normal'
            id='bandName'
            label='Band Name'
            className={classes.nameField}
            name='bandName'
            autoComplete='bandName'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='city'
            label='City'
            className={classes.addressField}
            name='city'
            autoComplete='city'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='state'
            label='State'
            className={classes.addressField}
            name='state'
            autoComplete='state'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='zipcode'
            label='Zip Code'
            className={classes.addressField}
            name='zipcode'
            autoComplete='zipcode'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} className={classes.floatRight}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            size='large'
            className={classes.button}
          >
            Update
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
}
