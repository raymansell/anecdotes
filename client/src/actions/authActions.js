import authService from '../services/authService';
import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  CLEAR_ERRORS,
  LOG_OUT,
} from '../constants/authConstants';

export const signin = (credentials, history) => {
  return async (dispatch) => {
    try {
      const { accessToken, name, id } = await authService.signin(credentials);
      dispatch({ type: SIGN_IN, payload: { accessToken, name, id } });
      history.push('/');
    } catch (error) {
      dispatch({
        type: SIGN_IN_ERROR,
        payload: { error: error.response.data.error },
      });
    }
  };
};

export const signup = (formData, history) => {
  return async (dispatch) => {
    try {
      const { accessToken, name, id } = await authService.signup(formData);
      dispatch({ type: SIGN_UP, payload: { accessToken, name, id } });
      history.push('/');
    } catch (error) {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: { errors: error.response.data.errors },
      });
    }
  };
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

export const logout = () => {
  return { type: LOG_OUT };
};
