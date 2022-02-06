import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
//import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

ReactDOM.render(
  //provider make the redux store available to any nested compoenent that need access
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
