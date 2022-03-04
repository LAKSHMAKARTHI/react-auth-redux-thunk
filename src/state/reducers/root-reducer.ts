/* 
    Developed by LK - Feb 2022 
*/

import { combineReducers } from "redux";
import { authReducer }  from '../reducers/auth-reducer'; 
import { profileReducer } from '../reducers/profile-reducer';
import { taskReducer } from '../reducers/task-reducer';

export const rootReducer = combineReducers({
    authReducer,
    profileReducer,
    taskReducer
});
export type AppState = ReturnType<typeof rootReducer>;