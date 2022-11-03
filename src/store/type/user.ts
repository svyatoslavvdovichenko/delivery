export interface UserState {
  message: string | null,
  isOpenUser: boolean
}

export enum UserActionTypes {
  SET_USER
}

export interface openUserAction {
  type: UserActionTypes;
  payload: string;
}

export interface closeUserAction {
  type: UserActionTypes;
}


export type UserAction =
  | closeUserAction
  | openUserAction
