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
  form: {
    // Fix IE 11 issue.
    margin: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    borderRadius: '2rem'
  },
  button: {
    margin: '3rem 3.5rem 2rem 0',
    backgroundImage: 'linear-gradient(to right, #95C99F, #6EB57B)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #7BBB87 , #5B9565)'
    }
  },
  floatRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
}));

export { useStyles };
