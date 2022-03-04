/* 
    Developed by LK - Feb 2022 
*/

import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from 'redux-logger';
import { isDev } from '../utils/enviroment';
import { rootReducer, AppState } from '../state/reducers/root-reducer'; 
import { AuthAction } from '../state/models/auth-model';

const logger = createLogger({});
var middlewares = [thunk as ThunkMiddleware<AppState, AuthAction>, logger];
let appliedMiddlewares = applyMiddleware(...middlewares);

if (isDev()) {
  const { composeWithDevTools } = require('redux-devtools-extension');
  appliedMiddlewares = composeWithDevTools(appliedMiddlewares);
}

export const store = createStore(
  rootReducer,
  appliedMiddlewares
);