export interface IUser {
  id: number;
  password: string;
  email: string;
}

export enum DeliveryMethodEmum {
  SDEK = "СДЕК",
  POST_OF_RUSSIA = "Почта россии",
  DHL = "DHL",
}

export type delivery = DeliveryMethodEmum;

export interface IDelivery {
  userId: number,
  id: number,
  title: string;
  deliveryMethod: deliveryMethodTax;
  toAdress: IAdress;
  fromAdress: IAdress;
  rate: number;
  price: number;
}

export enum rateEmum {
  DEFAULT = "DEFAULT",
  PREMIUM = "PREMIUM",
}

export type rate = rateEmum;

export interface deliveryMethodTax {
  id: number;
  title: string;
  deliveryMethod: delivery;
  deliveryTax: number;
  link: string;
}

export interface IAdress {
  country: string;
  city: string;
  street: string;
  house: number;
  housing: string;
  index: number;
}
