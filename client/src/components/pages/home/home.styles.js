import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  listings: {
    martingTop: theme.spacing(2),
    padding: theme.spacing(2)
  },
  copyright: {
    marginTop: theme.spacing(4)
  },
  title: {
    paddingBottom: theme.spacing(6)
  }
}));

export { useStyles };
