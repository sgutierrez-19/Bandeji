import React, { useReducer } from 'react';
import axios from 'axios';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';
import { TYPE, LFM_ERROR } from '../types';

const SearchState = props => {
  const initialState = {
    key: value // add necessary state
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Get Search
  const getSearch = async () => {
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

  // Delete Search
  const clearSearch = async id => {
    dispatch({
      type: TYPE,
      payload: id
    });
  };

  return (
    <SearchContext.Provider
      value={{
        key: state.key.value, // add all state values
        clearSearch,
        getSearch //, add additional methods created here
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
