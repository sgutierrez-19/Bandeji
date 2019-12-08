import React, { useContext, useEffect } from 'react';
// import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Map from './map/Map';
import Listings from './listings/Listings';
import Search from './search/Search';
import ListingsDetail from './listingsDetail/ListingsDetail';
import ListingsContext from '../../../context/listings/listingsContext';
import { useStyles } from './home.styles';
import AuthContext from '../../../context/auth/authContext';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      variant='body2'
      color='textSecondary'
      align='center'
      className={classes.copyright}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Pick Up Group
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {
  const listingsContext = useContext(ListingsContext);
  const {
    currentListing,
    generalListings,
    searchListings,
    getGeneralLFGListings,
    getGeneralLFMListings
  } = listingsContext;
  const authContext = useContext(AuthContext);
  const { userData, user } = authContext;

  useEffect(() => {
    if (userData.inBand === true) {
      console.log('State says is in band :)');
      console.log('userdata', userData);
      console.log('user', user);
      console.log('user', user);

      // getGeneralLFGListings()
    } else if (userData.inBand === false) {
      console.log('State says not in band :O');
      console.log('userdata', userData);
      console.log('user', user);
    } else {
      console.log('State did not load band information');
      console.log('userdata', userData);
      console.log('user', user);
    }
    // getGeneralListings('92603');
  }, [currentListing]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='xl' className={classes.container}>
          <Typography variant='h3' align='center' className={classes.title}>
            Discover Local Musicians and Bands
          </Typography>
          <Grid container spacing={3}>
            {/* Chart */}
            {currentListing ? (
              <Grid item xs={12} md={6} lg={8}>
                <Paper>
                  <ListingsDetail listing={currentListing} />
                </Paper>
              </Grid>
            ) : (
              <Grid item xs={12} md={6} lg={8}>
                <Paper>
                  <Map />
                </Paper>
              </Grid>
            )}

            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Search />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Paper className={classes.listings}>
                        <Listings
                          listings={
                            searchListings ? searchListings : generalListings
                          }
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

// import AuthContext from '../../../context/auth/authContext';

// const Home = () => {
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     // authContext.loadUser();
//     // eslint-disable-next-line
//   }, []);
