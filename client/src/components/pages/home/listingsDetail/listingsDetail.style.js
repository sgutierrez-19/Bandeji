import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    position: 'relative',
    // backgroundColor: theme.palette.grey[800],
    // color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center'
  },
  content: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    },
    textAlign: 'center'
  },
  contact: {
    margin: '2rem 1rem 0'
  },
  close: {
    backgroundColor: 'black',
    margin: '2rem 1rem 0'
  }
}));

export { useStyles };
