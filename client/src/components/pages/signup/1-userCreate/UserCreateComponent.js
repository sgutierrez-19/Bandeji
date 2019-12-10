import React, { useContext, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createSignup.style';
import { Fragment } from 'react';
import AuthContext from '../../../../context/auth/authContext';

export default function lfgDistance({ nextStep }) {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { updateCreateNewUserMember, createNewUserMember } = authContext;
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    console.log('STATE', createNewUserMember);
  }, [createNewUserMember]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let user = {
      email: newEmail,
      username: newUsername,
      password: newPassword
    };
    updateCreateNewUserMember(user);
    nextStep();
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltOutlinedIcon />
        </Avatar>
        <Typography component='h4' variant='h4'>
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item className={classes.formSpace} xs={12} sm={12}>
              <TextField
                className='adTextBoxHeight'
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
              />
            </Grid>
            <Grid className={classes.formSpace} item xs={12} sm={12}>
              <TextField
                className='adTextBoxHeight'
                variant='outlined'
                required
                fullWidth
                id='username'
                label='Username Description'
                name='username'
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
              />
            </Grid>
            <Grid className={classes.formSpace} item xs={12} sm={12}>
              <TextField
                className='adTextBoxHeight'
                variant='outlined'
                required
                fullWidth
                type='password'
                id='password'
                label='Password'
                name='password'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
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
