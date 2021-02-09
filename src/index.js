import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import jwtDecode from "jwt-decode";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./components/App";
import store from "./store";
import * as Types from "./store/actions/types";
import setAuthToken from "./utils/setAuthToken";

const token = localStorage.getItem("token");
if (token) {
  let decode = jwtDecode(token);
  setAuthToken(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode,
    },
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
