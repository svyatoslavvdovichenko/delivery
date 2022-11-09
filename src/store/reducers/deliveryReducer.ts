import { createRandomValue } from "./../../helpers/randomId";
import { IDelivery } from "./../../types";
import {
  DeliveryAction,
  DeliveryActionTypes,
  DeliveryState,
} from "./../types/delivery";

const initialState: DeliveryState = {
  deliveries: [],
};

export const deliveriesReducer = (
  state = initialState,
  action: DeliveryAction
): DeliveryState => {
  switch (action.type) {
    case DeliveryActionTypes.GET_DELIVERIES: {
      const allDeliveries: IDelivery[] = JSON.parse(
        localStorage.getItem("deliveries")!
      );

      if (!allDeliveries) {
        return state;
      }

      const deliveriesCurrentUser: IDelivery[] = allDeliveries.filter(
        (el) => el.userId === action.payload
      );

      return { ...state, deliveries: deliveriesCurrentUser };
    }
    case DeliveryActionTypes.CREATE_DELIVERIES: {
      const newDelivery = {
        ...action.payload,
        id: createRandomValue(state.deliveries),
      };
      localStorage.setItem(
        "deliveries",
        JSON.stringify([...state.deliveries, newDelivery])
      );
      return { deliveries: [...state.deliveries, newDelivery] };
    }

    default:
      return state;
  }
};
