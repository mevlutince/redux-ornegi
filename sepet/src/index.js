import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
