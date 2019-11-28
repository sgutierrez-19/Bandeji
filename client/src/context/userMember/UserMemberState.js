import React, { useReducer } from 'react';
import axios from 'axios';
import UserMemberContext from './userMemberContext';
import userMemberReducer from './userMemberReducer';
import { TYPE, BAND_ERROR } from '../types';

const UserMemberState = props => {
  const initialState = {
    key: 'value' // add necessary state
  };

  const [state, dispatch] = useReducer(userMemberReducer, initialState);

  // Get UserMember
  const getUserMember = async () => {
    try {
      const res = await axios.get('...route');

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BAND_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add UserMember
  const addUserMember = async userMember => {
    try {
      const res = await axios.post('route');

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BAND_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update UserMember
  const updateUserMember = async userMember => {
    try {
      const res = await axios.put(`route.../${userMember.id}`);

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      console.log(err); // find out what error message comes from err
      dispatch({
        type: BAND_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <UserMemberContext.Provider
      value={{
        key: state.key, // state.key.value, // add all state values
        addUserMember,
        getUserMember,
        updateUserMember
      }}
    >
      {props.children}
    </UserMemberContext.Provider>
  );
};

export default UserMemberState;
