import React, { useReducer } from 'react';
import axios from 'axios';
import BandContext from './bandContext';
import bandReducer from './bandReducer';
import { TYPE, BAND_ERROR } from '../types';

const BandState = props => {
  const initialState = {
    key: value // add necessary state
  };

  const [state, dispatch] = useReducer(bandReducer, initialState);

  // Get Band
  const getBand = async () => {
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

  // Add Band
  const addBand = async band => {
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

  // Delete Band
  const deleteBand = async id => {
    try {
      await axios.delete(`route.../${id}`);

      dispatch({
        type: TYPE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: BAND_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Band
  const updateBand = async band => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`route.../${band.id}`);

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
    <BandContext.Provider
      value={{
        key: state.key.value, // add all state values
        addBand,
        deleteBand,
        updateBand,
        getBand
      }}
    >
      {props.children}
    </BandContext.Provider>
  );
};

export default BandState;
