import { SET_USER } from '../constants/index';
import { UserType } from '../../interfaces/index';

type SetUserType = {
  type: typeof SET_USER;
  user: UserType;
};

export const setUser = (user: UserType): SetUserType => {
  return {
    type: SET_USER,
    user,
  };
};

export const setSingleUser = (user: UserType) => (dispatch: any) => {
  dispatch(setUser(user));
};
