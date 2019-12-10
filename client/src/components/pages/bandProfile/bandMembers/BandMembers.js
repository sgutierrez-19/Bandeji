import React, { useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserMemberContext from '../../../../context/userMember/userMemberContext';
import { useStyles } from './bandMembers.style';
import BandMemberContext from '../../../../context/bandMember/bandMemberContext';

export default function BandMembers({ refreshPage }) {
  const classes = useStyles();
  const [instrument, setInstrument] = useState('');
  const [name, setName] = useState('');
  const userMemberContext = useContext(UserMemberContext);
  const { instruments } = userMemberContext;
  const bandMemberContext = useContext(BandMemberContext);
  const { bandUserMember, updateBandMember } = bandMemberContext;
  const bandMembersarray = bandUserMember.bandMembersInfo;
  // eslint-disable-next-line
  const [_, ...bandMembers] = bandMembersarray;

  const updateInst = (memberid, instrumentid) => async e => {
    e.preventDefault();
    const toUpdate = {};
    if (name) toUpdate.memberName = name;
    if (instrument) toUpdate.instrument = instrument;
    console.log(toUpdate);
    await updateBandMember(memberid, instrumentid, {
      ...bandUserMember,
      ...toUpdate
    });
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
        <Typography component='h1' variant='h4' className={classes.title}>
          Band Members
        </Typography>
        {bandMembers &&
          bandMembers.map(member => {
            return (
              <form
                key={member.member.id}
                id={member.member.id}
                noValidate
                className={classes.form}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cover}
                    image={member.member.profilePicture}
                    alt='Band Member Picture'
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Grid item xs={6}>
                        <TextField
                          xs={12}
                          sm={6}
                          md={4}
                          variant='standard'
                          margin='normal'
                          id='memberName'
                          label='Name'
                          defaultValue={member.member.memberName}
                          className={classes.nameField}
                          onChange={e => setName(e.target.value)}
                          name='memberName'
                          autoFocus
                        />
                        <TextField
                          variant='outlined'
                          id='instruments'
                          select
                          label='Instrument'
                          className={classes.textField}
                          defaultValue={member.memberinstrument[0].instrument}
                          onChange={e => setInstrument(e.target.value)}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu
                            }
                          }}
                          margin='normal'
                        >
                          <MenuItem
                            key={-1}
                            value={'Select an Instrument'}
                            disabled
                          >
                            Select an Instrument
                          </MenuItem>
                          {instruments.map((instrument, index) => (
                            <MenuItem key={index} value={instrument}>
                              {instrument}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </CardContent>
                  </div>
                  <CardContent>
                    <Grid item xs={6}>
                      <Fab
                        variant='extended'
                        color='primary'
                        aria-label='add'
                        size='small'
                        className={classes.buttonPrimary}
                        onClick={updateInst(
                          member.member.id,
                          member.memberinstrument[0].id
                        )}
                      >
                        Update
                      </Fab>
                      {/* <Fab
                  variant='extended'
                  aria-label='add'
                  size='small'
                  className={classes.buttonDanger}
                >
                  Delete
                </Fab> */}
                    </Grid>
                  </CardContent>
                </Card>
              </form>
            );
          })}
      </Grid>
    </Grid>
  );
}
