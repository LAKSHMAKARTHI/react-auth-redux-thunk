/* 
    Developed by LK - Feb 2022 
*/

import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    AuthAction,
    LoginReducer,
    LogoutReducer
} from '../models/auth-model';
    
  const defaultState: LoginReducer | LogoutReducer = {
    data: null,
    token: "",
    loading: false,
    status: "initial"
  };
  
  export const authReducer = (
    state = defaultState,
    action: AuthAction
  ): LoginReducer => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { data: null, token: '', loading: true, status: 'trigger' };
      case LOGIN_SUCCESS:
        return { data: action.data, token: action.token, loading: false, status: 'success' };
      case LOGIN_FAILED:
        return { data: null, token: '', loading: false, status: 'error' };
      case LOGOUT_REQUEST:
        return { data: null, token: '', loading: true, status: 'trigger' };
      case LOGOUT_SUCCESS:
        return { data: null, token: '', loading: false, status: 'success' };
      case LOGOUT_FAILED:
        return { data: null, token: '', loading: false, status: 'error' };
      default:
        return state;
    }
  };
  