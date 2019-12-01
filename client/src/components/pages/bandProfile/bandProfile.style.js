import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  profile: {
    padding: '3rem'
  },
  text: {
    color: 'white',
    alignItems: 'center',
    padding: '1.5rem'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
  nameField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
  addressField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: '100%'
  },
  callToAction: {
    marginTop: '8rem',
    alignContent: 'center',
    textAlign: 'center'
  },
  paper: {
    margin: theme.spacing(8, 0),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    // Fix IE 11 issue.
    margin: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '2rem'
  },
  button: {
    margin: '3rem auto',
    alignItems: 'center'
  }
}));

export { useStyles };
