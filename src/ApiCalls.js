import { axiosApi } from './network';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axiosApi.post('auth/login', userCredential);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
};
