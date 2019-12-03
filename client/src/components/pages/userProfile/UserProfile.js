import React, { useEffect, useContext, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserCard from './userCard/UserCard';
import UserForm from './userForm/UserForm';
import UserMember from './userMember/UserMember';
import UserMemberContext from '../../../context/userMember/userMemberContext';
import { useStyles } from './userProfile.style';

export default function BandProfile() {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { userMemberInfo, getUserMember, loading } = userMemberContext;

  useEffect(() => {
    getUserMember();
    console.log(userMemberInfo);
  }, []);

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {!loading ? <UserCard /> : <CircularProgress />}
        </div>
      </Grid>
      <Grid item xs={false} sm={6} md={8} className={classes.profile}>
        {!loading ? <UserForm /> : <CircularProgress />}

        {/* <Typography variant='h3' align='center'>
          {bandMember.band.bandName}
          {!loading ? bandMember.band.bandName : <CircularProgress />}
        </Typography> */}
        <Grid item xs={12} sm={12}>
          {!loading ? <UserMember /> : <CircularProgress />}
        </Grid>
        {/* {!loading ? (
          <div>
            <UserForm bandMember={bandMember} />
            <BandMembers bandMember={bandMember} />
          </div>
        ) : (
          <CircularProgress />
        )} */}
      </Grid>
    </Grid>
  );
}
