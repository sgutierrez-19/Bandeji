import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';

import ListingsContext from '../../../../context/listings/listingsContext';

import { useStyles } from './listingsDetail.style';

export default function ListingsDetail({ listing }) {
  const listingsContext = useContext(ListingsContext);
  const { clearCurrent } = listingsContext;
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
              {listing.ad}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              Desired Instrument:
            </Typography>
            <Typography variant='h4' color='inherit' paragraph>
              {/* {currentListing.ad}  */}
              {listing.instrument}
            </Typography>
            {/* <Typography variant='h5' color='inherit' paragraph>
              About:
            </Typography>
            <Typography variant='subtitle1' color='inherit' paragraph>
              
              We are a punk rock band inpinred by bands like Blink182
            </Typography> */}
            <Typography variant='h5' color='inherit' paragraph>
              Location:
            </Typography>
            <Typography variant='h4' color='inherit' paragraph>
              {listing.city}
              {', '}
              {listing.state}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              Video:
            </Typography>
            <Typography variant='h4' color='inherit' paragraph>
              <iframe
                width='560'
                height='315'
                src={listing.youtubeLink}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
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
                onClick={() => clearCurrent()}
              >
                X close
              </Fab>
            </p>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
