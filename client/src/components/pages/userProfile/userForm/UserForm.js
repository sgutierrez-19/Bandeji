import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { useStyles } from './userForm.style';
import UserMemberContext from '../../../../context/userMember/userMemberContext';

export default function UserForm({ refreshPage }) {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { userMemberInfo, updateUserMember } = userMemberContext;
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const updateForm = async e => {
    e.preventDefault();
    const obj = {};
    if (name) obj.memberName = name;
    if (city) obj.city = city;
    if (state) obj.state = state;
    if (zipcode) obj.zipcode = zipcode;
    if (profilePicture) obj.profilePicture = profilePicture;
    await updateUserMember({ ...userMemberInfo, ...obj });
    refreshPage();
  };

  return (
    <form noValidate className={classes.form}>
      <Grid container spacing={4} alignContent='center'>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={12}>
          <TextField
            xs={12}
            sm={6}
            md={4}
            variant='standard'
            margin='normal'
            id='memberName'
            label='Name'
            defaultValue={userMemberInfo.userMember.memberName}
            className={classes.nameField}
            onChange={e => setName(e.target.value)}
            name='memberName'
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='city'
            label='City'
            defaultValue={userMemberInfo.userMember.city}
            className={classes.addressField}
            onChange={e => setCity(e.target.value)}
            name='city'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='state'
            label='State'
            onChange={e => setState(e.target.value)}
            defaultValue={userMemberInfo.userMember.state}
            className={classes.addressField}
            name='state'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant='standard'
            margin='normal'
            id='zipcode'
            label='Zip Code'
            onChange={e => setZipcode(e.target.value)}
            defaultValue={userMemberInfo.userMember.zipcode}
            className={classes.addressField}
            name='zipcode'
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12}>
          <TextField
            variant='standard'
            margin='normal'
            multiline
            rows='2'
            id='profilePicture'
            label='ProfilePicture'
            onChange={e => setProfilePicture(e.target.value)}
            defaultValue={userMemberInfo.userMember.profilePicture}
            className={classes.addressField}
            name='profilePicture'
            autoFocus
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} alignContent='center'>
        <Grid item xs={12} className={classes.floatRight}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            size='large'
            className={classes.button}
            onClick={updateForm}
          >
            Update
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
}
