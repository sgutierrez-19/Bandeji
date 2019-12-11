import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import MapPic from '../../../../img/map.PNG';

const useStyles = makeStyles(theme => ({
  root: {
    height: '81%'
  },
  image: {
    backgroundImage: 'url("./images/map.PNG")',
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
