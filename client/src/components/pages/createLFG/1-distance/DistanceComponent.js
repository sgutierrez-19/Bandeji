import React, { useContext, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFG.style';
import { Fragment } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';

export default function lfgDistance({ nextStep }) {
  const classes = useStyles();
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing, newListing } = listingsContext;
  const [newDistance, setNewDistance] = useState('');

  useEffect(() => {
    console.log('STATE', newListing);
  }, [newListing]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let distanceAdd = { distance: newDistance };
    updateNewListing(distanceAdd);
    nextStep();
  };

  const inputChange = e => {
    e.preventDefault();
    setNewDistance(e.target.value);
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h2'>
          Let's get your listing started...
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component='h3' variant='h4'>
                First, how far are you willing to travel to meet up?
              </Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>
                  Distance (Miles)
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={newDistance}
                  onChange={inputChange}
                >
                  <MenuItem value={5}>Up to Five</MenuItem>
                  <MenuItem value={10}>Up to Ten</MenuItem>
                  <MenuItem value={20}>Up to Twenty</MenuItem>
                  <MenuItem value={30}>Up to Thirty</MenuItem>
                </Select>
              </FormControl>
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
