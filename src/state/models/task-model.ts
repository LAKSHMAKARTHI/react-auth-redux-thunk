/* 
    Developed by LK - Feb 2022 
*/

export const GET_TASK_REQUEST = "GET_TASK_REQUEST";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const GET_TASK_FAILED = "GET_TASK_FAILED";

export interface TaskReducer {
    list: any;
    loading: boolean,
    status: string
}

interface GetTaskAction extends TaskReducer {
    type: typeof GET_TASK_REQUEST;
}

interface GetTaskSuccessAction extends TaskReducer {
    type: typeof GET_TASK_SUCCESS;
}

interface GetTaskFailedAction extends TaskReducer {
    type: typeof GET_TASK_FAILED;
}

export type TaskAction =
    | GetTaskAction
    | GetTaskSuccessAction
    | GetTaskFailedAction;
