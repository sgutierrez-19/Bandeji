import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFG.style';
import { Fragment } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';

export default function lfgDistance({ nextStep }) {
  const classes = useStyles();
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing } = listingsContext;
  const [newDistance, setNewDistance] = useState('');

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
          <MapOutlinedIcon />
        </Avatar>
        <Typography component='h3' variant='h3'>
          Create your own listing!
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                className={classes.subHeader}
                component='h4'
                variant='h4'
              >
                First, how far are you
                <br />
                willing to travel to meet up?
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
          <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
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
