import React, { useReducer } from 'react';
import axios from 'axios';
import ListingsContext from './listingsContext';
import listingsReducer from './listingsReducer';
import {
  LOAD_GENERAL_LISTINGS,
  SEARCH_LFG,
  SEARCH_LFM,
  PROFILE_PAGE,
  ADD_LFG,
  UPDATE_NEW_LISTING,
  ADD_LFM,
  DELETE_LFG,
  DELETE_LFM,
  LISTINGS_ERROR,
  LISTINGS_CLEAR_ERROR
} from '../types';

const ListingState = props => {
  const initialState = {
    // nulled?
    generalListings: null,
    searchListings: null,
    memberListings: null,
    newListing: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(listingsReducer, initialState);

  // 1) Get LFG/LFM on homepage page load
  const getGeneralListings = async () => {
    try {
      const res = await axios.get('/api/listings');

      dispatch({
        type: LOAD_GENERAL_LISTINGS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 2) search lfgs based on location & instrument
  const getSearchLFG = async () => {
    try {
      const res = await axios.get('/api/listings/lfg/search');

      dispatch({
        type: SEARCH_LFG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 3) search lfms based on location & instrument
  const getSearchLFM = async () => {
    try {
      const res = await axios.get('/api/listings/lfm/search');

      dispatch({
        type: SEARCH_LFM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 4) Get LFG/LFM that user has posted on edit profile page load
  const getUserMemberListings = async () => {
    try {
      const res = await axios.get('/api/member/listings');

      dispatch({
        type: PROFILE_PAGE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 5) Add LFG
  const addLFG = async lfg => {
    try {
      const res = await axios.post('/api/listings/lfg/create', lfg);

      dispatch({
        type: ADD_LFG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 5-A) Update newListing state during creation
  const updateNewListing = data => {
    try {
      dispatch({
        type: UPDATE_NEW_LISTING,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 6) Add LFM
  const addLFM = async lfm => {
    try {
      const res = await axios.post('/api/listings/lfm/create', lfm);

      dispatch({
        type: ADD_LFM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 7) Delete LFG
  const deleteLFG = async id => {
    try {
      await axios.delete(`/api/listings/lfg/delete/${id}`);

      dispatch({
        type: DELETE_LFG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // 8) Delete LFM
  const deleteLFM = async id => {
    try {
      await axios.delete(`/api/listings/lfm/delete/${id}`);

      dispatch({
        type: DELETE_LFM,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LISTINGS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // // Update LFG
  // const updateLFG = async lfg => {
  //   // const config = {
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   }
  //   // };
  //   try {
  //     const res = await axios.put(`route.../${lfg.id}`);
  //     dispatch({
  //       type: TYPE,
  //       payload: res.data
  //     });
  //   } catch (err) {
  //     console.log(err); // find out what error message comes from err
  //     dispatch({
  //       type: LFG_ERROR,
  //       payload: err.response.msg
  //     });
  //   }
  // };

  return (
    <ListingsContext.Provider
      value={{
        generalListings: state.generalListings,
        searchListings: state.searchListings,
        memberListings: state.memberListings,
        newListing: state.newListing,
        loading: state.loading,
        error: state.error,
        getGeneralListings,
        getSearchLFG,
        getSearchLFM,
        getUserMemberListings, // add all state values
        addLFG,
        updateNewListing,
        addLFM,
        deleteLFG,
        deleteLFM
      }}
    >
      {props.children}
    </ListingsContext.Provider>
  );
};

export default ListingState;
