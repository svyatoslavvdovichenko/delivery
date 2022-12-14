import { ErrorActionTypes } from "./../types/error";

export const setError = (payload: string) => ({
  type: ErrorActionTypes.OPEN_ERROR,
  payload,
});

export const closeError = () => ({ type: ErrorActionTypes.CLOSE_ERROR });
