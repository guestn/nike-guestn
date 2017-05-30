//import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  Form  from "./components/Form.js";
import { store } from "./store";
// render the main component
ReactDOM.render(
  <Provider store={store}>
    <Form/>
  </Provider>,
  document.getElementById('appContainer')
);
