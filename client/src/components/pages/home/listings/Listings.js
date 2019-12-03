import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
// import { useTheme } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

import { useStyles } from './listings.style';

export default function Listings() {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Fragment>
      <Typography component='h1' variant='h4' className={classes.title}>
        Listings
      </Typography>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image='https://upload.wikimedia.org/wikipedia/commons/3/31/AthleteBandApril2008.jpg'
          title='Live from space album cover'
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              Band looking for drummer.
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Anaheim, CA
            </Typography>
          </CardContent>
        </div>
        <CardContent>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={classes.view}
          >
            View
          </Fab>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image='https://upload.wikimedia.org/wikipedia/commons/3/31/AthleteBandApril2008.jpg'
          title='Live from space album cover'
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              Band looking for guitarist.
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Aliso Viejo, CA
            </Typography>
          </CardContent>
        </div>
        <CardContent>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={classes.view}
          >
            View
          </Fab>
        </CardContent>
      </Card>
    </Fragment>
  );
}
