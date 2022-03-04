/* 
    Developed by LK - Feb 2022 
*/

import { Dispatch } from 'redux';
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    AuthAction,
    LoginRequest,
    User
} from '../models/auth-model';
import { postService, postAuthService } from '../../utils/services';
import { authToken } from '../../consts/consts';

const loginAction = (): AuthAction => ({
  type: LOGIN_REQUEST,
  data: null,
  token: "",
  loading: false,
  status: "trigger"
});

const loginSuccessAction = (user: User, token: string): AuthAction => ({
  type: LOGIN_SUCCESS,
  data: user,
  token: token,
  loading: false,
  status: "success"
});

const loginErrorAction = (): AuthAction => ({
  type: LOGIN_FAILED,
  data: null,
  token: "",
  loading: false,
  status: "error"
});

const logoutAction = (): AuthAction => ({
  type: LOGOUT_REQUEST,
  loading: true,
  status: "trigger"
});

const logoutSuccessAction = (): AuthAction => ({
  type: LOGOUT_SUCCESS,
  loading: false,
  status: "success"
});

const logoutErrorAction = (): AuthAction => ({
  type: LOGOUT_FAILED,
  loading: false,
  status: "error"
});

export const loginSubmit = (fdata: LoginRequest) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch(loginAction());
        const { data, status } = await postService(fdata, '/user/login');
        if (status === 200){
            localStorage.setItem(authToken, 'Bearer '+data.token);
            dispatch(loginSuccessAction(data.user, data.token));
            window.location.reload();
        } else {
            dispatch(loginErrorAction());
        }
    } catch(e) {
        dispatch(loginErrorAction());
    }
  };
};

export const logoutRequest = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch(logoutAction());
        const { status } = await postAuthService({}, '/user/logout');
        if (status === 200){
          localStorage.removeItem(authToken)
            dispatch(logoutSuccessAction());
            window.location.reload();
        } else {
            dispatch(logoutErrorAction());
        }
    } catch(e) {
        dispatch(logoutErrorAction());
    }
  };
};
