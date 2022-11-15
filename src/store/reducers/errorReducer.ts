import { ErrorState, ErrorActionTypes, ErrorAction } from "./../types/error";

const initialState: ErrorState = {
  message: null,
  isOpenError: false,
};

export const errorReducer = (
  state = initialState,
  action: ErrorAction
): ErrorState => {
  switch (action.type) {
    case ErrorActionTypes.OPEN_ERROR:
      return { ...state, message: action.payload, isOpenError: true };

    case ErrorActionTypes.CLOSE_ERROR:
      return { ...state, message: null, isOpenError: false };

    default:
      return state;
  }
};
