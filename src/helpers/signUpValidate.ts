import { IUser } from "../types";

export const signUpValidate = (user: IUser) => {
  const users: IUser[] = JSON.parse(localStorage.getItem("users")!);
  if (!users) {
    return null;
  }

  const isUser = users.find((el) => el.email === user.email);

  if (isUser) {
    return "Пользователь с таким email существует";
  }

  return null;
};
