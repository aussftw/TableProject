import { SET_USERS_PENDING, SET_USERS, SET_USERS_FAILED } from '../constants';
import { UserType } from '../../interfaces';
import axios from 'axios';

type SetUsersType = {
  type: typeof SET_USERS;
  users: UserType;
};

type SetUsersPendingType = {
  type: typeof SET_USERS_PENDING;
  usersLoading: boolean;
};

type SetUsersFailedType = {
  type: typeof SET_USERS_FAILED;
  usersError: boolean;
};
export const setUsers = (users: UserType): SetUsersType => {
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

export const getUsers = () => async (dispatch: any) => {
  dispatch(setUsersFailed(false));
  dispatch(setUsersPendning(true));
  try {
    const res = await axios.get('https://randomuser.me/api/?results=50');
    dispatch(setUsersPendning(false));
    await dispatch(setUsers(res.data.results));
  } catch (error) {
    dispatch(setUsersFailed(true));
  }
};

export type UsersActionType = SetUsersFailedType | SetUsersType | SetUsersPendingType;
