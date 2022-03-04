/* 
    Developed by LK - Feb 2022 
*/

//login types & interface
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export interface LoginRequest {
    email: string;
    password: string | number;
}

export interface User {
    age: number;
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginReducer {
    data: any;
    token: string;
    loading: boolean,
    status: string
}

interface LoginAction extends LoginReducer {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction extends LoginReducer {
    type: typeof LOGIN_SUCCESS;
}

interface LoginFailureAction extends LoginReducer {
    type: typeof LOGIN_FAILED;
}
  
//register types & interface

export interface LogoutReducer {
    loading: boolean,
    status: string
}

interface LogoutAction extends LogoutReducer {
    type: typeof LOGOUT_REQUEST;
}

interface LogoutSuccessAction extends LogoutReducer {
    type: typeof LOGOUT_SUCCESS;
}

interface LogoutFailureAction extends LogoutReducer {
    type: typeof LOGOUT_FAILED;
}


export type AuthAction =
    | LoginAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutAction
    | LogoutSuccessAction
    | LogoutFailureAction;
