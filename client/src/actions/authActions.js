import authService from '../services/authService';
import { SIGN_IN, SIGN_UP } from '../constants/authConstants';

export const signin = (credentials, history) => {
  return async (dispatch) => {
    const { accessToken, user } = await authService.signin(credentials);
    dispatch({ type: SIGN_IN, payload: { accessToken, user } });
    history.push('/');
  };
};

export const signup = (formData, history) => {
  return async (dispatch) => {
    const { user } = await authService.signup(formData);
    dispatch({ type: SIGN_UP, payload: { user } });
    history.push('/');
  };
};
