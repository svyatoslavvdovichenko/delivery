import { IUser } from "./../../types";
export interface UserState {
  user: IUser | null;
  isAuth: boolean;
}

export enum UserActionTypes {
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SIGNUP_USER = "SIGNUP_USER",
  SET_USER = "SET_USER",
}

export interface logInUserAction {
  type: UserActionTypes.LOGIN_USER;
  payload: IUser;
}

export interface setUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser;
}

export interface logOutUserAction {
  type: UserActionTypes.LOGOUT_USER;
}

export interface signUpUserAction {
  type: UserActionTypes.SIGNUP_USER;
  payload: IUser;
}

export type UserAction =
  | logInUserAction
  | logOutUserAction
  | signUpUserAction
  | setUserAction;
