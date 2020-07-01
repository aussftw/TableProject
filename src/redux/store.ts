import { applyMiddleware, combineReducers, createStore } from 'redux';
import usersReducer from './reducers/usersReducer';
import loginReducer from './reducers/login-reducer';
import userReducer from './reducers/user-reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
  user: userReducer,
});

const logger = createLogger();
const middlewares = [thunk, logger];
export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
