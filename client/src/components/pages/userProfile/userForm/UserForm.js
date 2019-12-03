import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import UserMemberContext from '../../../../context/userMember/userMemberContext';
import { useStyles } from './userForm.style';

export default function BandForm() {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { userMemberInfo, updateUserMember } = userMemberContext;
  const [editName, setEditName] = useState('');
  const [editCity, setEditCity] = useState('');
  const [editState, setEditState] = useState('');
  const [editZipcode, setEditZipcode] = useState('');
  const [editProfilePicture, setProfilePicture] = useState('');

  const updateMember = e => {
    e.preventDefault();
    let obj = {
      memberName: editName,
      city: editCity,
      state: editState,
      zipcode: editZipcode,
      profilePicture: editProfilePicture
    };
    updateUserMember({ ...obj });
  };

  return (
    <form noValidate className={classes.form}>
      <Grid container spacing={4}>
        <Grid item sm={6} alignContent='right'>
          <TextField
            item
            xs={12}
            sm={6}
            md={6}
            variant='standard'
            margin='normal'
            id='editname'
            label='Name'
            className={classes.nameField}
            name='editname'
            defaultValue={userMemberInfo.memberName}
            onChange={e => setEditName(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid sm={6}></Grid>
        <Grid item xs={12} sm={6} md={4} alignContent='center'>
          <TextField
            variant='standard'
            margin='normal'
            id='city'
            label='City'
            className={classes.addressField}
            name='city'
            defaultValue={userMemberInfo.city}
            onChange={e => setEditCity(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} alignContent='center'>
          <TextField
            variant='standard'
            margin='normal'
            id='state'
            label='State'
            className={classes.addressField}
            name='state'
            defaultValue={userMemberInfo.state}
            onChange={e => setEditState(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} alignContent='center'>
          <TextField
            variant='standard'
            margin='normal'
            id='zipcode'
            label='Zip Code'
            className={classes.addressField}
            name='zipcode'
            defaultValue={userMemberInfo.zipcode}
            onChange={e => setEditZipcode(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid item sm={12} alignContent='right'>
          <TextField
            item
            xs={12}
            sm={6}
            md={6}
            variant='standard'
            margin='normal'
            id='profilePicture'
            label='Profile Picture'
            multiline
            rows='2'
            className={classes.nameField}
            name='profilePicture'
            defaultValue={userMemberInfo.profilePicture}
            onChange={e => setProfilePicture(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} alignContent='left' className={classes.floatRight}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            size='large'
            className={classes.button}
            onClick={updateMember}
          >
            Update Profile
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
}
