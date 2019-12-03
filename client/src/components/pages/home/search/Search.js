import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './search.style';

import instruments from '../../../../instruments/instruments';

export default function SignUp() {
  const classes = useStyles();
  const [value, setValue] = useState('individuals');
  const [instrument, setInstrument] = useState('Accordion');

  const handleInstrumentChange = event => {
    setInstrument(event.target.value);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.paper}>
      <Typography component='h1' variant='h4'>
        Search Listings
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl component='fieldset' className={classes.formControl}>
              <RadioGroup
                className={classes.radioGroup}
                aria-label='Search Type'
                name='searchType'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='individuals'
                  control={<Radio color='primary' />}
                  label='Individuals'
                  labelPlacement='start'
                />
                <FormControlLabel
                  value='bands'
                  control={<Radio color='primary' />}
                  label='Bands'
                  labelPlacement='start'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='city'
              name='city'
              variant='outlined'
              required
              fullWidth
              id='city'
              label='City'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='state'
              label='State'
              name='state'
              autoComplete='state'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='zipcode'
              name='zipcode'
              variant='outlined'
              required
              fullWidth
              id='zipcode'
              label='Zip Code'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              name='instruments'
              id='instruments'
              select
              label='Instrument'
              value={instrument}
              className={classes.instruments}
              onChange={handleInstrumentChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {instruments.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
