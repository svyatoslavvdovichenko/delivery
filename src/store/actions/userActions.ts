import { UserActionTypes } from './../type/user';
import { IUser } from './../../types';

const onLogIn = (payload: IUser) => ({ type: UserActionTypes.LOGIN_USER, payload })

const onLogOut = () => ({ type: UserActionTypes.LOGOUT_USER });

const onSignUp = (payload: IUser) => ({ type: UserActionTypes.SIGNUP_USER, payload })

const setUser = (payload: IUser) => ({ type: UserActionTypes.SET_USER, payload });

export {
  onLogIn,
  onLogOut,
  onSignUp,
  setUser
}