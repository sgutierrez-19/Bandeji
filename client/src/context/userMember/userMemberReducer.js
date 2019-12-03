import { GET_USERMEMBER, UPDATE_USERMEMBER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USERMEMBER:
      return {
        ...state,
        userMemberInfo: action.payload,
        loading: false
      };
    case UPDATE_USERMEMBER:
      return {
        ...state,
        userMemberInfo: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
