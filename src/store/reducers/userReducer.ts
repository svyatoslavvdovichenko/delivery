import { IUser } from "./../../types";
import { UserActionTypes } from "./../type/user";
import { UserAction, UserState } from "../type/user";
import { createRandomValue } from "../../helpers/randomId";

const initialState: UserState = {
  user: null,
  isAuth: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER: {
      const users: IUser[] = JSON.parse(localStorage.getItem("users")!);
      const user: IUser = users.find(el => el.email === action.payload.email)!;
      
      localStorage.setItem("user", JSON.stringify(user));

      return { ...state, isAuth: true, user: user };
    }
    case UserActionTypes.LOGOUT_USER: {
      localStorage.removeItem("user")
      return { ...state, isAuth: false, user: null };
    }
    case UserActionTypes.SIGNUP_USER: {
      const users: IUser[] = JSON.parse(localStorage.getItem("users")!) || [];
      const user: IUser = { ...action.payload, id: createRandomValue(users) };
      
      localStorage.setItem("users", JSON.stringify([...users, user]));
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, isAuth: true, user: user };
    }
    default:
      return state;
  }
};
