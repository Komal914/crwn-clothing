//this is the user reducer -> will deal with all user actions
//reducer is a function that returns the enxt state tree,
//given the state tree and an action to handle

import { userActionTypes } from "./user.types";

//redux does not have an initial state so we need a default
const INITIAL_STATE = {
  currentUser: null,
};

//if state is not set, initial state is used, null is a valid val here
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
