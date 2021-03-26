import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  CLEAR_ERRORS,
  LOG_OUT,
} from '../constants/authConstants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP: {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.accessToken,
          id: action.payload.id,
        })
      );
      return {
        ...state,
        errors: null,
        name: action.payload.name,
        token: action.payload.accessToken,
        id: action.payload.id,
      };
    }
    case SIGN_IN_ERROR: {
      return {
        ...state,
        errors: { wrongEmailOrPassword: action.payload.error },
      };
    }
    case SIGN_UP_ERROR: {
      return {
        ...state,
        errors: action.payload.errors,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        errors: null,
      };
    }
    case LOG_OUT: {
      localStorage.removeItem('user');
      return null;
    }

    default:
      return state;
  }
};

export default reducer;
