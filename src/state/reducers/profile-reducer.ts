/* 
    Developed by LK - Feb 2022 
*/

import { 
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    ProfileAction,
    ProfileReducer
} from '../models/profile-model';
    
const defaultState: ProfileReducer = {
    data: null,
    loading: false,
    status: "initial"
};

export const profileReducer = (
        state = defaultState,
        action: ProfileAction
    ): ProfileReducer => {
        switch (action.type) {
            case GET_PROFILE_REQUEST:
                return { data: null, loading: true, status: 'trigger' };
            case GET_PROFILE_SUCCESS:
                return { data: action.data, loading: false, status: 'success' };
            case GET_PROFILE_FAILED:
                return { data: null, loading: false, status: 'error' };
            default:
        return state;
    }
};
  