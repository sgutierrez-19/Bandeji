import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
// import setAuthToken from '../../utils/setAuthToken';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  UPDATE_NEW_USERMEMBER,
  SET_LOADING
} from '../types';

const AuthState = props => {
  const initialState = {
    userData: null,
    isAuthenticated: false,
    createNewUserMember: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  // const loadUser = async () => {
  //   const token = localStorage.getItem('token');
  //   // if (token) {
  //   //   setAuthToken(token);
  //   // }
  //   try {
  //     const res = await axios.get('/api/auth', {
  //       headers: {
  //         'x-auth-token': token
  //       }
  //     });

  //     dispatch({
  //       type: USER_LOADED,
  //       payload: res.data
  //     });
  //   } catch (err) {
  //     dispatch({ type: AUTH_ERROR });
  //   }
  // };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/signup', formData, config);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });

      // loadUser();
    } catch (err) {
      console.log(err);
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Register User
  const registerBandMember = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(
        '/api/member/bandmember/signup',
        formData,
        config
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/login', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const updateCreateNewUserMember = data => {
    try {
      dispatch({
        type: UPDATE_NEW_USERMEMBER,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.msg
      });
    }
  };

  // Logout
  const logout = async () => {
    await axios.get('/logout');
    try {
      dispatch({ type: LOGOUT });
    } catch (err) {}
  };

  //Set Loading True
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        userData: state.userData,
        isAuthenticated: state.isAuthenticated,
        createNewUserMember: state.createNewUserMember,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        // loadUser,
        login,
        updateCreateNewUserMember,
        registerBandMember,
        logout,
        clearErrors,
        setLoading
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
