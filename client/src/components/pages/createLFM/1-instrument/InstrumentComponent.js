import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createLFM.style';
import { Fragment } from 'react';
import ListingsContext from '../../../../context/listings/listingsContext';
import UserMemberContext from '../../../../context/userMember/userMemberContext';

export default function lfgDistance({ nextStep }) {
  const classes = useStyles();
  const listingsContext = useContext(ListingsContext);
  const { updateNewListing } = listingsContext;
  const [newInstrument, setNewInstrument] = useState('');
  const userMemberContext = useContext(UserMemberContext);
  const { instruments } = userMemberContext;

  const updateListingInProgress = e => {
    e.preventDefault();
    let instrumentAdd = { instrument: newInstrument };
    updateNewListing(instrumentAdd);
    nextStep();
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmojiPeopleOutlinedIcon />
        </Avatar>
        <Typography className={classes.subHeader} component='h3' variant='h3'>
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
                What kind of musician are you
                <br />
                looking for?
              </Typography>
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
