import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '81%'
  },
  image: {
    backgroundImage:
      'url(https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/pass/GoogleMapTA.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignContent: 'center',
    height: '80.5vh'
  }
}));

export { useStyles };
