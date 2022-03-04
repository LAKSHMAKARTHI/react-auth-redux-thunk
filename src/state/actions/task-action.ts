/* 
    Developed by LK - Feb 2022 
*/

import { Dispatch } from 'redux';
import { 
    GET_TASK_REQUEST,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED,
    TaskAction
} from '../models/task-model';
import { getService } from '../../utils/services';

const getTaskAction = (): TaskAction => ({
  type: GET_TASK_REQUEST,
  list: [],
  loading: true,
  status: "trigger"
});

const getTaskSuccessAction = (tasks: any): TaskAction => ({
  type: GET_TASK_SUCCESS,
  list: tasks,
  loading: false,
  status: "success"
});

const getTaskErrorAction = (): TaskAction => ({
  type: GET_TASK_FAILED,
  list: [],
  loading: false,
  status: "error"
});

export const getTaskRequest = () => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
        dispatch(getTaskAction());
        const { data, status } = await getService('/task');
        if (status === 200){
            dispatch(getTaskSuccessAction(data));
        } else {
            dispatch(getTaskErrorAction());
        }
    } catch(e) {
        dispatch(getTaskErrorAction());
    }
  };
};
