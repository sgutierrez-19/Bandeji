import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // component css
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formSpace: {
    margin: theme.spacing(1, 0)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  // dropdown css
  formControl: {
    margin: theme.spacing(3, 0),
    width: '100%'
  },
  formControlInside: {
    margin: theme.spacing(0, 0),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  adTextBoxHeight: {
    height: 300,
    fontSize: '12em'
  }
}));

export { useStyles };
