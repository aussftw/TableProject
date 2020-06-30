import { LOGIN } from '../constants/index';

export const SetLogin = (isLogin: boolean): LoginType => {
  return {
    type: LOGIN,
    isLogin,
  };
};

export const logIn = (login: boolean) => (dispatch: any) => {
  if (login === true) {
    localStorage.setItem('loggined', 'true');
    dispatch(SetLogin(login));
  } else {
    localStorage.setItem('loggined', 'false');

    dispatch(SetLogin(login));
  }
};

type LoginType = {
  type: typeof LOGIN;
  isLogin: boolean;
};

export type LoginActionType = LoginType;
