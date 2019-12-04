import {
  SIGNUP_BAND_MEMBER,
  GET_BAND_MEMBER,
  UPDATE_BAND_MEMBER,
  BAND_MEMBER_ERROR,
  CLEAR_BAND_MEMBER_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_BAND_MEMBER:
    case UPDATE_BAND_MEMBER:
      const bandUserMember = {
        ...state.bandUserMember,
        ...state.payload
      };
      return {
        ...state,
        bandUserMember,
        loading: false
      };
    case GET_BAND_MEMBER:
      return {
        ...state,
        bandUserMember: action.payload,
        loading: false
      };
    case BAND_MEMBER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_BAND_MEMBER_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
