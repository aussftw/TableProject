import { LOGIN } from '../constants';
import { LoginActionType } from '../actions/loginActions';

const initialState = {
  isLogin: false,
};

const loginReducer = (state = initialState, action: LoginActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
};

export default loginReducer;
