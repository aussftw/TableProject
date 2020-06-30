import {
  SET_USERS_PENDING,
  SET_USERS,
  SET_USERS_FAILED,
  SET_SORT_DIRECTION,
  SET_SORT_FIELD,
  SET_SEARCH_RESULTS,
} from '../constants/index';
import { UsersActionType } from '../actions/usersAction';
import { UserType } from '../../interfaces/index';

const initialState = {
  users: [] as Array<UserType>,
  usersLoading: false,
  usersError: false,
  sortDirectionAscending: true,
  sortField: 'userName',
  searchField: '',
  searchResult: [] as Array<UserType>,
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

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResult: action.searchResult,
      };

    case SET_SORT_FIELD:
      return {
        ...state,
        sortField: action.sortField,
      };

    case SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirectionAscending: action.sortDirectionAscending,
      };
    default:
      return state;
  }
};

export default appReducer;
