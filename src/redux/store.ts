import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import usersReducer from './reducers/app-reducer';
import loginReducer from './reducers/login-reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
});

// type RootReducerType = typeof reducers;
const logger = createLogger();
const middlewares = [thunk, logger];
export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
