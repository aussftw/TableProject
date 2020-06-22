import { SET_USERS_PENDING, SET_USERS, SET_USERS_FAILED } from '../constants/index';
import { UsersActionType } from '../actions/usersAction';
import { UserType } from '../../interfaces/index';

const initialState = {
  users: [] as Array<UserType>,
  usersLoading: false,
  usersError: false,
};

const appReducer = (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case SET_USERS_PENDING:
      return {
        ...state,
        usersLoading: action.usersLoading,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_USERS_FAILED:
      return {
        ...state,
        error: action.usersError,
      };
    default:
      return state;
  }
};

export default appReducer;
