import {
  LOAD_GENERAL_LISTINGS,
  GENERAL_LISTINGS_ERROR,
  SEARCH_LFG_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_GENERAL_LISTINGS:
      return {
        ...state,
        generalListings: action.payload,
        loading: false
      };
    case SEARCH_LFG_ERROR:
    case GENERAL_LISTINGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
