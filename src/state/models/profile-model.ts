/* 
    Developed by LK - Feb 2022 
*/

export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED";

export interface User {
    age: number;
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProfileReducer {
    data: any;
    loading: boolean,
    status: string
}

interface GetProfileAction extends ProfileReducer {
    type: typeof GET_PROFILE_REQUEST;
}

interface GetProfileSuccessAction extends ProfileReducer {
    type: typeof GET_PROFILE_SUCCESS;
}

interface GetProfileFailedAction extends ProfileReducer {
    type: typeof GET_PROFILE_FAILED;
}

export type ProfileAction =
    | GetProfileAction
    | GetProfileSuccessAction
    | GetProfileFailedAction;
