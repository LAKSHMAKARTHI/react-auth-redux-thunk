/* 
    Developed by LK - Feb 2022 
*/

import { Dispatch } from 'redux';
import { 
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    ProfileAction,
    User
} from '../models/profile-model';
import { getService } from '../../utils/services';

const logoutAction = (): ProfileAction => ({
  type: GET_PROFILE_REQUEST,
  data: null,
  loading: true,
  status: "trigger"
});

const logoutSuccessAction = (user: User): ProfileAction => ({
  type: GET_PROFILE_SUCCESS,
  data: user,
  loading: false,
  status: "success"
});

const logoutErrorAction = (): ProfileAction => ({
  type: GET_PROFILE_FAILED,
  data: null,
  loading: false,
  status: "error"
});

export const getProfileRequest = () => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
        dispatch(logoutAction());
        const { data, status } = await getService('/user/me');
        if (status === 200){
            dispatch(logoutSuccessAction(data));
        } else {
            dispatch(logoutErrorAction());
        }
    } catch(e) {
        dispatch(logoutErrorAction());
    }
  };
};
