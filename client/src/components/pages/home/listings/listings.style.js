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
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  view: {
    margin: '0'
  }
}));

export { useStyles };
