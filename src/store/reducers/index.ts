import { combineReducers } from "redux";
import { deliveriesReducer } from "./deliveryReducer";
import { errorReducer } from "./errorReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  errorReducer,
  userReducer,
  deliveriesReducer
});
