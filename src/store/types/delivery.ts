import { IDelivery } from "./../../types";

export interface DeliveryState {
  deliveries: IDelivery[];
}

export enum DeliveryActionTypes {
  GET_DELIVERIES = "GET_DELIVERIES",
  CREATE_DELIVERIES = "CREATE_DELIVERIES",
}

export interface getDeliveriesAction {
  type: DeliveryActionTypes.GET_DELIVERIES;
  payload: number;
}

export interface createDeliveriesAction {
  type: DeliveryActionTypes.CREATE_DELIVERIES;
  payload: IDelivery;
}

export type DeliveryAction = getDeliveriesAction | createDeliveriesAction;
