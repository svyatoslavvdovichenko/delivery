export interface IUser {
  id?: number;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export enum EDeliveryMethod {
  SDEK = "СДЕК",
  POST_OF_RUSSIA = "Почта россии",
  DHL = "DHL",
}

export interface IDelivery {
  userId?: number;
  id?: number;
  title: string;
  deliveryMethod: string;
  country: string;
  city: string;
  street: string;
  house: string;
  housing: string;
  index: string;
  isHouse?: boolean;
  fromCountry: string;
  fromCity: string;
  fromStreet: string;
  fromHouse: string;
  fromIsHouse?: boolean;
  fromHousing: string;
  fromIndex: string;
  rate: string;
  price?: number;
}

export enum ERate {
  DEFAULT = "DEFAULT",
  PREMIUM = "PREMIUM",
}

export interface IDeliveryMethodTax {
  id: number;
  title: string;
  deliveryMethod: EDeliveryMethod;
  deliveryTax: number;
  link: string;
}
