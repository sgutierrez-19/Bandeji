import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../createSignup.style';
import { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../../../context/auth/authContext';

export default function lfgInstLocation({
  prevStep,
  nextStep,
  doubleNextStep
}) {
  const classes = useStyles();
  const [isPartOfGroup, setIsPartOfGroup] = useState('');
  const authContext = useContext(AuthContext);
  const { updateCreateNewUserMember, createNewUserMember } = authContext;

  useEffect(() => {
    console.log('STATE', createNewUserMember);
  }, [createNewUserMember]);

  const updateListingInProgress = e => {
    e.preventDefault();
    let obj = { type: isPartOfGroup };
    updateCreateNewUserMember(obj);
    if (isPartOfGroup === 'Individual') {
      nextStep();
    } else {
      doubleNextStep();
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h2'>
          Are you currently part of a band or solo?
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}> */}
            <FormControl component='fieldset' className={classes.formControl}>
              <FormLabel component='legend'></FormLabel>
              <RadioGroup
                aria-label='isPartOfGroup'
                name='isPartOfGroup'
                value={isPartOfGroup}
                onChange={e => setIsPartOfGroup(e.target.value)}
              >
                <FormControlLabel
                  value='Individual'
                  control={<Radio />}
                  label="I'm solo"
                />
                <FormControlLabel
                  value='Band'
                  control={<Radio />}
                  label="I'm part of a band"
                />
              </RadioGroup>
            </FormControl>
            {/* </Grid> */}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={prevStep}
          >
            Back
          </Button>
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
