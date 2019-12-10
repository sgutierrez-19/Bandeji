import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './navbar.style';

import AuthContext from '../../../context/auth/authContext';

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const { userData, logout, isAuthenticated } = authContext;
  const band = userData && userData.inBand;
  console.log('User in band- ', band);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isAuthenticated && (
        <Link to='/userprofile'>
          <MenuItem>
            <IconButton color='inherit'></IconButton>
            <p>Profile</p>
          </MenuItem>
        </Link>
      )}
      {isAuthenticated && band && (
        <Link to='/band/profile'>
          <MenuItem>
            <IconButton color='inherit'></IconButton>
            <p>Band Profile</p>
          </MenuItem>
        </Link>
      )}
      {isAuthenticated && (
        <Link to={band ? '/createlfm' : 'createlfg'}>
          <MenuItem>
            <IconButton color='inherit'></IconButton>
            <p>Create Listing</p>
          </MenuItem>
        </Link>
      )}
      {!isAuthenticated && (
        <Link to='/signup'>
          <MenuItem>
            <IconButton color='inherit'></IconButton>
            <p>Signup</p>
          </MenuItem>
        </Link>
      )}
      {isAuthenticated ? (
        <Link to='' onClick={() => logout()}>
          <MenuItem>
            <IconButton color='inherit'></IconButton>
            <p>Logout</p>
          </MenuItem>
        </Link>
      ) : (
        <Link to='/login'>
          <MenuItem>
            <IconButton color='inherit'></IconButton>
            <p>Login</p>
          </MenuItem>
        </Link>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar className={classes.appBar}>
          <Typography className={classes.title} variant='h5' noWrap>
            <Link to='/' className={classes.brand}>
              {' '}
              Bandeji
            </Link>
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isAuthenticated && (
              <Typography className={classes.title} variant='subtitle1' noWrap>
                <Link to='/userprofile' className={classes.menuButton}>
                  Profile
                </Link>
              </Typography>
            )}
            {isAuthenticated && band && (
              <Typography className={classes.title} variant='subtitle1' noWrap>
                <Link to='/band/profile' className={classes.menuButton}>
                  Band Profile
                </Link>
              </Typography>
            )}
            {isAuthenticated && (
              <Typography className={classes.title} variant='subtitle1' noWrap>
                <Link
                  to={band ? '/createlfm' : 'createlfg'}
                  className={classes.menuButton}
                >
                  Create Listing
                </Link>
              </Typography>
            )}

            <Typography className={classes.title} variant='subtitle1' noWrap>
              {isAuthenticated ? (
                <Link
                  to=''
                  onClick={() => logout()}
                  className={classes.menuButton}
                >
                  Logout
                </Link>
              ) : (
                <Link to='/login' className={classes.menuButton}>
                  Login
                </Link>
              )}
            </Typography>
            {!isAuthenticated && (
              <Typography className={classes.title} variant='subtitle1' noWrap>
                <Link to='/signup' className={classes.menuButton}>
                  Signup
                </Link>
              </Typography>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
