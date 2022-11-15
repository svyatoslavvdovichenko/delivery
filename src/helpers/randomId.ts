import { IDelivery, IUser } from './../types';

export const createRandomValue = (array: IDelivery[] | IUser[]): number => {
  let randomId: number = Math.floor(Math.random() * 10000);
  array.forEach((el) => {
    if (randomId === el.id) {
      createRandomValue(array);
      return;
    }
  });

  return randomId;
};
