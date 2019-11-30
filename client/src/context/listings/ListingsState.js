import React, { useReducer } from 'react';
import axios from 'axios';
import ListingsContext from './listingsContext';
import listingsReducer from './listingsReducer';
import { TYPE, LFG_ERROR } from '../types';

const ListingState = props => {
  const initialState = {
    key: 'value' // add necessary state
  };

  const [state, dispatch] = useReducer(listingsReducer, initialState);

  // 1) Get LFG/LFM on homepage page load
  const getUserMemberListings = async () => {
    try {
      const res = await axios.get('/api/lfg/view');

      dispatch({
        type: loadHome,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 2) search lfgs based on location & instrument
  const getSearchLFG = async () => {
    try {
      const res = await axios.get('/api/search/lfg');

      dispatch({
        type: searchLFG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 3) search lfms based on location & instrument
  const getSearchLFM = async () => {
    try {
      const res = await axios.get('/api/search/lfm');

      dispatch({
        type: searchLFM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 1) Get LFG/LFM on homepage page load
  const getUserMemberListings = async () => {
    try {
      const res = await axios.get('/api/lfg/view');

      dispatch({
        type: loadHome,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 4) Add LFG
  const addLFG = async lfg => {
    try {
      const res = await axios.post('route');

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete LFG
  const deleteLFG = async id => {
    try {
      await axios.delete(`route.../${id}`);

      dispatch({
        type: TYPE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update LFG
  const updateLFG = async lfg => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };

    try {
      const res = await axios.put(`route.../${lfg.id}`);

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      console.log(err); // find out what error message comes from err
      dispatch({
        type: LFG_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <ListingsContext.Provider
      value={{
        key: state.key, // add all state values
        addLFG,
        deleteLFG,
        updateLFG,
        getLFG //, add additional methods created here
      }}
    >
      {props.children}
    </ListingsContext.Provider>
  );
};

export default ListingState;
