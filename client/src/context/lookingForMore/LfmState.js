import React, { useReducer } from 'react';
import axios from 'axios';
import LfgContext from './lfgContext';
import lfgReducer from './lfgReducer';
import { TYPE, LFM_ERROR } from '../types';

const LfgState = props => {
  const initialState = {
    key: value // add necessary state
  };

  const [state, dispatch] = useReducer(lfgReducer, initialState);

  // Get LFG
  const getLFG = async () => {
    try {
      const res = await axios.get('...route');

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add LFG
  const addLFG = async lfg => {
    try {
      const res = await axios.post('route');

      dispatch({
        type: TYPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LFM_ERROR,
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
        type: LFM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update LFG
  const updateLFG = async lfg => {
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
        type: LFM_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <LfgContext.Provider
      value={{
        key: state.key.value, // add all state values
        addLFG,
        deleteLFG,
        updateLFG,
        getLFG //, add additional methods created here
      }}
    >
      {props.children}
    </LfgContext.Provider>
  );
};

export default LfgState;
