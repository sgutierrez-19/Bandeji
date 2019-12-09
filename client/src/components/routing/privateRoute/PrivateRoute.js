import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, userData } = authContext;
  console.log(
    'PrivateRoute isAuthentiated',
    isAuthenticated && isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated &&
        !isAuthenticated &&
        !loading &&
        !userData &&
        !userData ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
