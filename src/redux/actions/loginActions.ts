import { LOGIN } from '../constants/index';
import { LoginUserType } from '../../interfaces/index';

type LoginType = {
  type: typeof LOGIN;
  isLogin: boolean;
};
export const SetLogin = (isLogin: boolean): LoginType => {
  return {
    type: LOGIN,
    isLogin,
  };
};

export const logIn = (login: boolean, user: LoginUserType) => (dispatch: any) => {
  if (login === true) {
    localStorage.setItem('loggined', 'true');
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(SetLogin(login));
  } else {
    localStorage.setItem('loggined', 'false');
    localStorage.removeItem('user');
    dispatch(SetLogin(login));
  }
};

export type LoginActionType = LoginType;
