import { IUser } from "../types";

export const createRandomValue = (users: IUser[]): number => {
  let randomId: number = Math.floor(Math.random() * 10000);
  users.forEach((user) => {
    if (randomId === user.id) {
      createRandomValue(users);
      return;
    }
  })
  
  return randomId;
}