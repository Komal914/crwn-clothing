//Actions are the only source of information for the store
//they help us communicate between redux and react
//this is the root reducer file so it will contain all reducers in my store

import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
