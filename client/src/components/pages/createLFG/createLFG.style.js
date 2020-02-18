import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // component css
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundImage: 'linear-gradient(to right, #ECC30B , #F37748)'
  },
  subHeader: {
    textAlign: 'center',
    width: '100%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '2rem',
    backgroundImage: 'linear-gradient(to right, #f37748 , #d56062)',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #DD6D42 , #C2585A)'
    }
  },
  // dropdown css
  formControl: {
    margin: theme.spacing(3, 0),
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  adTextBoxHeight: {
    height: 300,
    fontSize: '12em'
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
}));

export { useStyles };
