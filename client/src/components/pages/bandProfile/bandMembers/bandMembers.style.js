import { makeStyles } from '@material-ui/core/styles';
import { red, teal } from '@material-ui/core/colors';
const danger = red[500];
const success = teal[500];

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  card: {
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing(2),
    border: 'solid 1px lightgray'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '150px',
    height: '150px'
  },
  view: {
    margin: '0'
  },
  root: {
    marginTop: '4rem'
  },
  bandMembersTitle: {
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
