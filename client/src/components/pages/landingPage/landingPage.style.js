import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(http://inn.spb.ru/images/400/DSC100490773.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignContent: 'center',
    height: '100vh'
  },
  login: {
    height: '100vh'
  },
  text: {
    color: 'white',
    alignItems: 'center',
    padding: '1.5rem'
  },
  callToAction: {
    marginTop: '8rem',
    alignContent: 'center',
    textAlign: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '2rem'
  },
  button: {
    margin: '3rem auto',
    backgroundImage: 'linear-gradient(to right, #f37748 , #d56062)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #DD6D42 , #C2585A)',
      textDecoration: 'none !important'
    }
  },
  link: {
    textDecoration: 'none !important'
  }
}));

export { useStyles };
