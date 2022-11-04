import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  errorReducer,
  userReducer
});
