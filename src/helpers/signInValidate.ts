import { IUser } from "../types";

export const signInValidate = (user: IUser) => {
  const users: IUser[] = JSON.parse(localStorage.getItem("users")!);
 
  if (!users) {
    return "Пользователей нет станьте первым";
  }

  const userCandidate = users.find((el) => el.email === user.email);
  if (!userCandidate) {
    return "Пользователь не найден";
  }

  if (userCandidate.password !== user.password) {
    return  "Введен не верный пароль";
  }
  
  return null;
};
