import { IDelivery } from "./../../types";
import { DeliveryActionTypes } from "./../types/delivery";

const getDeliveries = (payload: number) => ({
  type: DeliveryActionTypes.GET_DELIVERIES,
  payload,
});

const createDelivery = (payload: IDelivery) => ({
  type: DeliveryActionTypes.CREATE_DELIVERIES,
  payload,
});

export { getDeliveries, createDelivery };
