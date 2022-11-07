export interface IUser {
  id?: number;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export enum DeliveryMethodEmum {
  SDEK = "СДЕК",
  POST_OF_RUSSIA = "Почта россии",
  DHL = "DHL",
}

export type delivery = DeliveryMethodEmum;

export interface IDelivery {
  userId?: number,
  id?: number,
  title: string;
  deliveryMethod: string;
  country: string;
  city: string;
  street: string;
  house: number;
  housing: string;
  index: number;
  fromCountry: string,
  fromCity: string,
  fromStreet: string,
  fromHouse: number,
  fromHousing: string,
  fromIndex: number,
  rate: ITypeDelivery;
  price?: number;
}

export interface ITypeDelivery {
  id: number,
  title: rate,
  factor: number
}

export enum rateEnum {
  DEFAULT = "DEFAULT",
  PREMIUM = "PREMIUM",
}

export type rate = rateEnum;

export interface deliveryMethodTax {
  id: number;
  title: string;
  deliveryMethod: delivery;
  deliveryTax: number;
  link: string;
}

