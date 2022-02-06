import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//redux lets us combine multiple reducers into one
//that can be passed into createStrore
export default combineReducers({
  user: userReducer,
});
