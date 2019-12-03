import React, { useContext, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h2'>
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={12}>
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
              <Grid item xs={12} sm={12}>
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
              <Grid item xs={12} sm={12}>
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
