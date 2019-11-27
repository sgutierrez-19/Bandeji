import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Layout
import Navbar from './components/layout/navbar/Navbar';
import Alerts from './components/layout/alerts/Alerts';
// Pages
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Signup from './components/auth/signup/Signup';
import LandingPage from './components/pages/landingPage/LandingPage';
import Page404 from './components/pages/404/404';

// import PrivateRoute from './components/routing/privateRoute/PrivateRoute';

// State
// import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    // <AuthState>
    <AlertState>
      <Router>
        <Fragment>
          <Navbar />
          <div className=''>
            <Alerts />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={LandingPage} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AlertState>
    // </AuthState>
  );
};

export default App;
