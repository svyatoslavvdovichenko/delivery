import { UserAction, UserState } from "../type/user";

const initialState: UserState = {
  
};

export const errorReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};
