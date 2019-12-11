import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Popover from '@material-ui/core/Popover';
import ListingsContext from '../../../../context/listings/listingsContext';

import { useStyles } from './listingsDetail.style';

export default function ListingsDetail({ listing }) {
  const listingsContext = useContext(ListingsContext);
  const { clearCurrent } = listingsContext;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Paper className={classes.main}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.content}>
            <Typography
              component='h4'
              variant='h4'
              color='inherit'
              gutterBottom
            >
              <strong>{listing.ad}</strong>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h5' color='inherit' paragraph>
            <strong>
              {listing.Band ? 'Desired Instrument' : 'Instrument Played:'}
            </strong>
          </Typography>
          <Typography variant='h4' color='inherit' paragraph>
            {listing.instrument}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h5' color='inherit' paragraph>
            <strong>{listing.Band ? 'Band Name' : 'Musician Name:'}</strong>
          </Typography>
          <Typography variant='h4' color='inherit' paragraph>
            {listing.Band ? listing.Band.bandName : listing.Member.memberName}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h5' color='inherit' paragraph>
            <strong>Location:</strong>
          </Typography>
          <Typography variant='h4' color='inherit' paragraph>
            {listing.city}
            {', '}
            {listing.state}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4' color='inherit' paragraph>
            <iframe
              title={listing.id}
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${listing.youtubeLink}`}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={classes.contact}
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            Contact
          </Fab>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={e => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Typography className={classes.typography}>
              {listing.Band ? listing.Band.bandName : listing.Member.memberName}
              {`'s contact email: `}
              {listing.Band
                ? listing.Band.User.email
                : listing.Member.User.email}
            </Typography>
          </Popover>
          ;
        </Grid>
        <Grid item xs={3}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={classes.close}
            onClick={() => clearCurrent()}
          >
            Back to Map
          </Fab>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Paper>
  );
}
