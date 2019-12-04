import React, { useEffect, useContext, useState } from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField'
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import BandCard from './bandCard/BandCard';
import BandForm from './bandForm/BandForm';
import BandMembers from './bandMembers/BandMembers';
import BandMemberContext from '../../../context/bandMember/bandMemberContext';

import { useStyles } from './bandProfile.style';

export default function BandProfile() {
  const classes = useStyles();
  const bandMemberContext = useContext(BandMemberContext);
  const [refresh, setRefresh] = useState(0);
  const { bandUserMember, loading, getBandMember } = bandMemberContext;

  useEffect(() => {
    getBandMember();
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
            <BandCard refreshPage={refreshPage} />
          ) : (
            <CircularProgress />
          )}
        </div>
      </Grid>
      <Grid item xs={false} sm={6} md={8} className={classes.profile}>
        <Typography variant='h3' align='center'>
          {/* {bandMember.band.bandName} */}
          {/* {!loading ? bandMember.band.bandName : <CircularProgress />} */}
        </Typography>
        {!loading ? (
          <div>
            <BandForm refreshPage={refreshPage} />
            <BandMembers refreshPage={refreshPage} />
          </div>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Grid>
  );
}
