import React, { useContext } from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserMemberContext from '../../../../context/userMember/userMemberContext';
// import Fab from '@material-ui/core/Fab';
import { useStyles } from './usermember.style';

export default function BandMembers() {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { instruments, userMemberInfo } = userMemberContext;

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <Typography
          variant='h4'
          align='center'
          className={classes.bandMembersTitle}
        >
          Your Instruments
        </Typography>
        <form noValidate className={classes.form}>
          {userMemberInfo.MemberInstruments.map(instrument => (
            <Grid container spacing={2}>
              <Grid item xs={6} alignContent='center'>
                <TextField
                  variant='outlined'
                  id={instrument.id}
                  select
                  label='Instrument'
                  className={classes.textField}
                  defaultValue={instrument.instrument}
                  // onChange={handleChange}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin='normal'
                >
                  {instruments.map(instrument => (
                    <MenuItem key={instrument} value={instrument}>
                      {instrument}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={2} alignContent='center'>
                <Fab
                  variant='extended'
                  color='success'
                  aria-label='add'
                  size='small'
                  className={classes.buttonSuccess}
                >
                  Add
                </Fab>
              </Grid>
              <Grid item xs={2} alignContent='center'>
                <Fab
                  variant='extended'
                  color='primary'
                  aria-label='add'
                  size='small'
                  className={classes.buttonPrimary}
                >
                  Update
                </Fab>
              </Grid>
              <Grid item xs={2} alignContent='center'>
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
          ))}
        </form>
      </Grid>
    </Grid>
  );
}
