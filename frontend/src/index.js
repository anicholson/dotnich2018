import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Homepage from "./Homepage";
import * as serviceWorker from "./serviceWorker";

let root = document.getElementById("root");

let app = (
  <Router>
    <App>
      <Route path="/" component={Homepage} />
    </App>
  </Router>
);

ReactDOM.render(app, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
