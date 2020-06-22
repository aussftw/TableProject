import API from '../../api/api';

import Router from 'next/router';

import axios from 'axios';

type SetError = {
  type: typeof constants.ERROR;
  error: boolean;
};
export const setError = (error: boolean): SetError => {
  return {
    type: constants.ERROR,
    error,
  };
};

// type SetSingleUser = {
//   type: typeof constants.GET_USER;
//   singleUser: UserType;
// };
// type SetUserPendingType = {
//   type: typeof constants.SET_USER_PENDING;
//   userLoading: boolean;
// };

// export const setUserPendning = (userLoading: boolean): SetUserPendingType => {
//   return {
//     type: constants.SET_USER_PENDING,
//     userLoading,
//   };
// };

// export const setSingleUser = (singleUser: UserType): SetSingleUser => {
//   return {
//     type: constants.GET_USER,
//     singleUser,
//   };
// };

// export const createUser = (name: string, surname: string, desc: string) => async (dispatch: any) => {
//   const res = await API.postUser(name, surname, desc);
//   if (res.status === 201) {
//     const data = await API.getUsers();
//     dispatch(setUsers(data.data));
//   }
// };

// export const deleteUser = (userId: number) => async (dispatch: any) => {
//   const res = await API.removeUser(userId);
//   dispatch(setUserPendning(true));
//   if (res.status === 200) {
//     dispatch(setUserPendning(false));
//     const response = await API.getUsers();
//     if (response.status === 200) {
//       dispatch(setUserPendning(false));
//       dispatch(setUsers(response.data));
//     }
//   } else {
//     dispatch(setError(true));
//   }
// };

// export const getSingleUser = (userId: string) => async (dispatch: any) => {
//   dispatch(setUserPendning(true));
//   const res = await API.getUser(userId);
//   if (res.status === 200) {
//     dispatch(setSingleUser(res.data));
//     dispatch(setUserPendning(false));
//   } else {
//     dispatch(setError(true));
//   }
// };

// export const editUser = (userId: number, name: string, surname: string, desc: string) => async (dispatch: any) => {
//   const res = await API.editUser(userId, name, surname, desc);
//   if (res.status === 200) {
//     const response = await API.getUsers();
//     dispatch(setUsersPendning(true));
//     if (res.status === 200) {
//       dispatch(setUsers(response.data));
//       Router.push('/');
//       dispatch(setUsersPendning(false));
//     } else {
//       dispatch(setError(true));
//     }
//   } else {
//     dispatch(setError(true));
//   }
// };
