import { SET_USERS_PENDING, SET_USERS, SET_USERS_FAILED, SET_SORT_DIRECTION, SET_SORT_FIELD } from '../constants';
import { UserType } from '../../interfaces';
import axios from 'axios';
import { SEARCH_USER, SET_SEARCH_RESULTS } from '../constants/index';

type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

type SetUsersPendingType = {
  type: typeof SET_USERS_PENDING;
  usersLoading: boolean;
};

type SetUsersFailedType = {
  type: typeof SET_USERS_FAILED;
  usersError: boolean;
};

type SetSortFieldType = {
  type: typeof SET_SORT_FIELD;
  sortField: string;
};

type SetSortDirectionType = {
  type: typeof SET_SORT_DIRECTION;
  sortDirectionAscending: boolean;
};

type SetSearchUserType = {
  type: typeof SEARCH_USER;
  searchField: string;
};

type SetSearchUserResultType = {
  type: typeof SET_SEARCH_RESULTS;
  searchResult: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersType => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setUsersPendning = (usersLoading: boolean): SetUsersPendingType => {
  return {
    type: SET_USERS_PENDING,
    usersLoading,
  };
};

export const setUsersFailed = (usersError: boolean): SetUsersFailedType => {
  return {
    type: SET_USERS_FAILED,
    usersError,
  };
};

export const setSortField = (sortField: string): SetSortFieldType => {
  return {
    type: SET_SORT_FIELD,
    sortField,
  };
};

export const setSortDirection = (sortDirectionAscending: boolean): SetSortDirectionType => {
  return {
    type: SET_SORT_DIRECTION,
    sortDirectionAscending,
  };
};

export const setSearchUser = (searchField: string): SetSearchUserType => {
  return {
    type: SEARCH_USER,
    searchField,
  };
};

export const setSearchResult = (searchResult: Array<UserType>): SetSearchUserResultType => {
  return {
    type: SET_SEARCH_RESULTS,
    searchResult,
  };
};

export const sortUsers = (sortField: string, sortDirectionAscending: boolean, users: Array<UserType>) => (
  dispatch: any
) => {
  dispatch(setSortField(sortField));
  dispatch(setSortDirection(sortDirectionAscending));

  users.sort((a, b) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (a[sortField] < b[sortField]) {
      return sortDirectionAscending === true ? -1 : 1;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (a[sortField] > b[sortField]) {
      return sortDirectionAscending === true ? 1 : -1;
    }
    return 0;
  });
  setUsers(users);
};

export const getUsers = () => async (dispatch: any) => {
  setUsersFailed(false);
  setUsersPendning(true);
  try {
    const res = await axios.get('https://randomuser.me/api/?results=50');
    dispatch(setUsersPendning(false));
    const niceUsers = res.data.results.map((item: any) => {
      const user = {
        userName: item.name.last,
        age: item.dob.age,
        ...item,
      };
      return user;
    });
    await dispatch(setUsers(niceUsers));
  } catch (error) {
    setUsersFailed(true);
  }
};

export const searchUser = (searchField: string, users: Array<UserType>) => (dispatch: any) => {
  const searchResult = users.filter((item) => item['userName'].toLowerCase().includes(searchField.toLowerCase()));
  dispatch(setSearchResult(searchResult));
};

export type UsersActionType =
  | SetUsersFailedType
  | SetUsersType
  | SetUsersPendingType
  | SetSortDirectionType
  | SetSortFieldType
  | SetSearchUserType
  | SetSearchUserResultType;
