import { TYPE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
        key: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
