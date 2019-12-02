import { TYPE, UPDATE_NEW_LISTING } from '../types';
import {
  LOAD_GENERAL_LISTINGS,
  SEARCH_LFG,
  SEARCH_LFM,
  PROFILE_PAGE,
  ADD_LFG,
  ADD_LFM,
  DELETE_LFG,
  DELETE_LFM,
  LISTINGS_ERROR,
  LISTINGS_CLEAR_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_GENERAL_LISTINGS:
      return {
        ...state,
        generalListings: action.payload,
        loading: false
      };
    case SEARCH_LFG:
      return {
        ...state,
        searchListings: action.payload,
        loading: false
      };
    case SEARCH_LFM:
      return {
        ...state,
        searchListings: action.payload,
        loading: false
      };
    case PROFILE_PAGE:
      return {
        ...state,
        memberListings: action.payload,
        loading: false
      };
    case ADD_LFG:
      return {
        ...state,
        newListing: action.payload,
        loading: false
      };
    case UPDATE_NEW_LISTING:
      const newListing = {
        ...state.newListing,
        ...action.payload
      };
      return {
        ...state,
        newListing,
        loading: false
      };
    case ADD_LFM:
      return {
        ...state,
        newListing: action.payload,
        loading: false
      };
    case DELETE_LFG:
      return {
        ...state,
        memberListings: action.payload,
        loading: false
      };
    case DELETE_LFM:
      return {
        ...state,
        memberListings: action.payload,
        loading: false
      };
    case LISTINGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LISTINGS_CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
