import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";
import PostsRepository, { defaultConfig } from "./PostsRepository";

let root = document.getElementById("root");

let postsRepo = new PostsRepository(defaultConfig);

if (postsRepo.count() <= 0) {
  postsRepo.populate();
}

let app = (
  <Router>
    <App>
      <Routes />
    </App>
  </Router>
);

ReactDOM.render(app, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
