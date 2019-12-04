import { makeStyles } from '@material-ui/core/styles';
import { red, teal } from '@material-ui/core/colors';
const danger = red[500];
const success = teal[500];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4rem'
  },
  instrumentTitle: {
    marginTop: '2rem'
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
  paper: {
    margin: theme.spacing(8, 0),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    // Fix IE 11 issue.
    margin: theme.spacing(2)
  },
  buttonPrimary: {
    margin: '2rem 0',
    marginLeft: '1.5rem',
    color: 'white'
  },
  buttonDanger: {
    margin: '2rem 0',
    marginLeft: '1.5rem',
    color: 'white',
    backgroundColor: danger
  },
  buttonSuccess: {
    margin: '2rem 0',
    marginLeft: '1.5rem',
    color: 'white',
    backgroundColor: success
  }
}));

export { useStyles };
