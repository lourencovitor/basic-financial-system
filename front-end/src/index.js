import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./pages";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
