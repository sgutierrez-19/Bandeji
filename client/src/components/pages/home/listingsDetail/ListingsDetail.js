import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

// import Link from '@material-ui/core/Link';

import { useStyles } from './listingsDetail.style';

export default function ListingsDetail(currentListing) {
  const classes = useStyles();

  return (
    <Paper className={classes.main}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.content}>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              {/* {currentListing.title} */}
              The Incredibels
            </Typography>
            <Typography variant='subtitle1' color='inherit' paragraph>
              {/* {currentListing.ad}  */}
              Looking for someone who plays <b>Drums</b>
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              About:
            </Typography>
            <Typography variant='subtitle1' color='inherit' paragraph>
              {/* {currentListing.description} */}
              We are a punk rock band inpinred by bands like Blink182
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              Location:
            </Typography>
            <Typography variant='subtitle1' color='inherit' paragraph>
              {/* {currentListing.city}{', '}{currentListing.state}  */}
              Anaheim, CA
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              Video:
            </Typography>
            <Typography variant='subtitle1' color='inherit' paragraph>
              {/* {currentListing.youtubeLink}  */}
              Check me out on youtube.
            </Typography>
            <p>
              <Fab
                variant='extended'
                color='primary'
                aria-label='add'
                className={classes.contact}
              >
                Contact
              </Fab>
              <Fab
                variant='extended'
                color='primary'
                aria-label='add'
                className={classes.close}
              >
                X close
              </Fab>
            </p>

            {/* <Link variant='p' href='#'>
              Post Text
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
