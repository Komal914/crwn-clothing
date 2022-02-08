import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up middleware

//middlesware are third party extention points between dispatching an action and the moment it reacghes the reducers
const middlewares = [logger];

//Store is an object that holds the complete state of your app
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
