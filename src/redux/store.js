import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up middleware

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
