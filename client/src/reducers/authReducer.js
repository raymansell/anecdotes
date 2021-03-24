import { SIGN_IN, SIGN_UP } from '../constants/authConstants';

const reducer = (state = { loggedUser: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP: {
      return {
        ...state,
        loggedUser: {
          id: action.payload.user,
          token: action.payload.accessToken,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
