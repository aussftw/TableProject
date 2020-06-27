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

export const logIn = (login: boolean) => (dispatch: any) => {
  if (login === true) {
    localStorage.setItem('loggined', 'true');
    dispatch(SetLogin(login));
  } else {
    localStorage.setItem('loggined', 'false');

    dispatch(SetLogin(login));
  }
};

export type LoginActionType = LoginType;
