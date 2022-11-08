export const createRandomValue = (array: any): number => {
  let randomId: number = Math.floor(Math.random() * 10000);
  array.forEach((el: { id: number }) => {
    if (randomId === el.id) {
      createRandomValue(array);
      return;
    }
  });

  return randomId;
};
