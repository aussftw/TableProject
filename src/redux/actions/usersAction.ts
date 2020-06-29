import { SET_USERS_PENDING, SET_USERS, SET_USERS_FAILED, SET_SORT_DIRECTION, SET_SORT_FIELD } from '../constants';
import { UserType } from '../../interfaces';
import axios from 'axios';

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

export const sortUsers = (sortField: string, sortDirectionAscending: boolean, users: Array<UserType>) => (
  dispatch: any
) => {
  console.log(sortField, 'field', sortDirectionAscending, 'dire');
  dispatch(setSortField(sortField));
  dispatch(setSortDirection(sortDirectionAscending));

  users.sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return sortDirectionAscending === true ? -1 : 1;
    }
    if (a[sortField] > b[sortField]) {
      return sortDirectionAscending === true ? 1 : -1;
    }
    return 0;
  });
  dispatch(setUsers(users));
};

export const getUsers = () => async (dispatch: any) => {
  setUsersFailed(false);
  setUsersPendning(true);
  try {
    const res = await axios.get('https://randomuser.me/api/?results=50');
    dispatch(setUsersPendning(false));
    const niceUsers = res.data.results.map((item: any) => {
      const user = {
        userName: item.name.first,
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

export type UsersActionType =
  | SetUsersFailedType
  | SetUsersType
  | SetUsersPendingType
  | SetSortDirectionType
  | SetSortFieldType;
