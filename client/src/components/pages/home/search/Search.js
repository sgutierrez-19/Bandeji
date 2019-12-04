import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ListingsContext from '../../../../context/listings/listingsContext';

import { useStyles } from './search.style';

import instruments from '../../../../instruments/instruments';

export default function Search() {
  const listingsContext = useContext(ListingsContext);
  const { getSearchLFG, getSearchLFM } = listingsContext;

  const classes = useStyles();
  const [searchType, setSearchType] = useState('individuals');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [instrument, setInstrument] = useState('');

  const search = async e => {
    e.preventDefault();
    const obj = {};
    if (city) obj.city = city;
    if (state) obj.state = state;
    if (zipcode) obj.zipcode = zipcode;
    if (instrument) obj.instrument = instrument;
    if (searchType === 'individuals') {
      await getSearchLFG({ ...obj });
    } else {
      await getSearchLFM({ ...obj });
    }
  };

  const handleInstrumentChange = event => {
    setInstrument(event.target.value);
  };

  const handleChange = event => {
    setSearchType(event.target.value);
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
                value={searchType}
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
              defaultValue={city}
              onChange={e => setCity(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='state'
              variant='outlined'
              required
              fullWidth
              id='state'
              label='State'
              name='state'
              defaultValue={state}
              onChange={e => setState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='zipcode'
              label='Zip Code'
              name='zipcode'
              autoComplete='zipcode'
              defaultValue={zipcode}
              onChange={e => setZipCode(e.target.value)}
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
          onClick={search}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
