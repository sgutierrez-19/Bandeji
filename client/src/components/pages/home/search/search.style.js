import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  instruments: {
    width: '100%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: 'linear-gradient(to right, #f37748 , #d56062)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #DD6D42 , #C2585A)'
    },
    borderRadius: '2rem'
  },
  formControl: {
    textAlign: 'center'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

export { useStyles };
