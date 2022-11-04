import { UserActionTypes } from './../type/user';
import { IUser } from './../../types';

const onLogIn = (payload: IUser) => ({ type: UserActionTypes.LOGIN_USER, payload })

const onLogOut = () => ({ type: UserActionTypes.LOGOUT_USER });

const onSignUp = (payload: IUser) => {
  console.log(payload);
  
  return ({ type: UserActionTypes.SIGNUP_USER, payload })
}
export {
  onLogIn,
  onLogOut,
  onSignUp,
}