import { makeStyles } from '@material-ui/core/styles';

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
    flex: '1 0 auto',
    width: '40%'
  },
  cover: {
    width: '150px',
    height: '150px'
  },
  view: {
    margin: '1.5rem',
    width: '%'
  },
  button: {
    backgroundImage: 'linear-gradient(to right, #f37748 , #d56062)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #DD6D42 , #C2585A)'
    }
  }
}));

export { useStyles };
