import React, { useReducer } from 'react';
import axios from 'axios';
import UserMemberContext from './userMemberContext';
import userMemberReducer from './userMemberReducer';
import { GET_USERMEMBER, UPDATE_USERMEMBER, BAND_ERROR, TYPE } from '../types';

const UserMemberState = props => {
  const initialState = {
    states: [
      'Alaska',
      'Alabama',
      'Arkansas',
      'Arizona',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Iowa',
      'Idaho',
      'Illinois',
      'Indiana',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Massachusetts',
      'Maryland',
      'Maine',
      'Michigan',
      'Minnesota',
      'Missouri',
      'Mississippi',
      'Montana',
      'North Carolina',
      'North Dakota',
      'Nebraska',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'Nevada',
      'New York',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Virginia',
      'Vermont',
      'Washington',
      'Wisconsin',
      'West Virginia',
      'Wyoming'
    ],
    instruments: [
      'Accordion',
      'Banjo',
      'Cello',
      'Clarinet',
      'Drums',
      'Flute',
      'Guitar',
      'Guitar-Bass',
      'Keyboard',
      'Obo',
      'Piano',
      'Trumpet',
      'Voice-Any',
      'Voice-Soprano',
      'Voice-Alto',
      'Voice-Tenor',
      'Voice-Bass',
      'Violin',
      'Viola'
    ],
    userMemberInfo: null,
    loading: true
  };

  const [state, dispatch] = useReducer(userMemberReducer, initialState);

  // Get UserMember
  const getUserMember = async () => {
    try {
      const res = await axios.get('/api/member/usermember');

      dispatch({
        type: GET_USERMEMBER,
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
  const updateUserMember = async data => {
    try {
      const res = await axios.put(`/api/member/updateusermember`, data);
      console.log('updateUserMember data: ', data);
      dispatch({
        type: UPDATE_USERMEMBER,
        payload: data
      });
    } catch (err) {
      console.log(err); // find out what error message comes from err
      dispatch({
        type: BAND_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update UserMember
  const updateUserMemberInstrument = async (id, data) => {
    try {
      const res = await axios.put(
        `/api/member/updateusermemberinstrument/${id}`,
        data
      );

      dispatch({
        type: UPDATE_USERMEMBER,
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
        userMemberInfo: state.userMemberInfo,
        states: state.states,
        instruments: state.instruments,
        loading: state.loading,
        addUserMember,
        getUserMember,
        updateUserMember,
        updateUserMemberInstrument
      }}
    >
      {props.children}
    </UserMemberContext.Provider>
  );
};

export default UserMemberState;
