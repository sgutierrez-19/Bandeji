import React, { useEffect, useContext, useState } from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField'
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserCard from './userCard/UserCard';
import UserForm from './userForm/UserForm';
import UserInstruments from './userInstruments/UserInstruments';
import UserMemberContext from '../../../context/userMember/userMemberContext';
import { useStyles } from './userProfile.style';

export default function UserProfile() {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { getUserMember, loading } = userMemberContext;
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    getUserMember();
  }, [refresh]);

  const refreshPage = () => {
    setRefresh(refresh + 1);
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {!loading ? (
            <UserCard refreshPage={refreshPage} />
          ) : (
            <CircularProgress />
          )}
        </div>
      </Grid>
      <Grid item xs={false} sm={6} md={8} className={classes.profile}>
        <Typography variant='h3' align='center'>
          {!loading ? 'Hi' : <CircularProgress />}
        </Typography>
        {!loading ? (
          <div>
            <UserForm refreshPage={refreshPage} />
            <UserInstruments refreshPage={refreshPage} />
          </div>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Grid>
  );
}
