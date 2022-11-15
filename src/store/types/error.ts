export interface ErrorState {
  message: string | null;
  isOpenError: boolean;
}

export enum ErrorActionTypes {
  OPEN_ERROR = "OPEN_ERROR",
  CLOSE_ERROR = "CLOSE_ERROR",
}

export interface openErrorAction {
  type: ErrorActionTypes.OPEN_ERROR;
  payload: string;
}

export interface closeErrorAction {
  type: ErrorActionTypes.CLOSE_ERROR;
}

export type ErrorAction = closeErrorAction | openErrorAction;
