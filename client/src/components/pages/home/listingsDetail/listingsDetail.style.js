import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    position: 'relative',
    // backgroundColor: theme.palette.grey[800],
    // color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center'
  },
  content: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6)
      // paddingRight: 0
    },
    textAlign: 'center'
  },
  contact: {
    backgroundImage: 'linear-gradient(to right, #f37748 , #d56062)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #DD6D42 , #C2585A)'
    },
    margin: '2rem 1rem 0'
  },
  close: {
    backgroundImage: 'linear-gradient(to right, #9CC1D6 , #78ABC7)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #90BAD1 , #6E9CB5)'
    },
    margin: '2rem 1rem'
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

export { useStyles };
