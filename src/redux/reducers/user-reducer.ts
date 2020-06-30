import { SET_USER } from '../constants/index';
import { UserType } from '../../interfaces/index';

const initialState = {
  user: {} as UserType,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
