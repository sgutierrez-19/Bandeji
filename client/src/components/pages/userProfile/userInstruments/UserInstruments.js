import React, { useState, useContext } from 'react';
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
import UserMemberContext from '../../../../context/userMember/userMemberContext';
import { useStyles } from './userInstruments.style';

export default function BandMembers({ refreshPage }) {
  const classes = useStyles();
  const [instrument, setInstrument] = useState('');
  const userMemberContext = useContext(UserMemberContext);
  const {
    userMemberInfo,
    instruments,
    updateUserMemberInstrument
  } = userMemberContext;
  console.log('userMemberInfo:', userMemberInfo);

  const updateInst = id => async e => {
    e.preventDefault();
    await updateUserMemberInstrument(id, { instrument });
    refreshPage();
  };

  return (
    <Grid
      container
      component='main'
      className={classes.root}
      alignContent='center'
    >
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <Typography
          variant='h4'
          align='center'
          className={classes.instrumentTitle}
        >
          Members
        </Typography>
        {userMemberInfo.MemberInstruments.map(instrument => {
          return (
            <form
              key={instrument.id}
              id={instrument.id}
              noValidate
              className={classes.form}
            >
              <Grid container spacing={2} alignContent='center'>
                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    id='instruments'
                    select
                    label='Instrument'
                    className={classes.textField}
                    defaultValue={instrument.instrument}
                    onChange={e => setInstrument(e.target.value)}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    margin='normal'
                  >
                    <MenuItem key={-1} value={'Select an Instrument'} disabled>
                      Select an Instrument
                    </MenuItem>
                    {instruments.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <Fab
                    variant='extended'
                    color='primary'
                    aria-label='add'
                    size='small'
                    className={classes.buttonPrimary}
                    onClick={updateInst(instrument.id)}
                  >
                    Update
                  </Fab>
                  <Fab
                    variant='extended'
                    aria-label='add'
                    size='small'
                    className={classes.buttonDanger}
                  >
                    Delete
                  </Fab>
                </Grid>
              </Grid>
            </form>
          );
        })}
      </Grid>
    </Grid>
  );
}
