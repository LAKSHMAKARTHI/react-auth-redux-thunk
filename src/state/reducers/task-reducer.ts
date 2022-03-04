/* 
    Developed by LK - Feb 2022 
*/

import { 
    GET_TASK_REQUEST,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED,
    TaskAction,
    TaskReducer
} from '../models/task-model';
    
const defaultState: TaskReducer = {
    list: [],
    loading: false,
    status: "initial"
};

export const taskReducer = (
        state = defaultState,
        action: TaskAction
    ): TaskReducer => {
        switch (action.type) {
            case GET_TASK_REQUEST:
                return { list: null, loading: true, status: 'trigger' };
            case GET_TASK_SUCCESS:
                return { list: action.list.data, loading: false, status: 'success' };
            case GET_TASK_FAILED:
                return { list: null, loading: false, status: 'error' };
            default:
        return state;
    }
};
  