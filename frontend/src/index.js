import { h, render, Component } from "preact";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Routes from "./routes";
import PostsRepository, { defaultConfig } from "./PostsRepository";

let postsRepo = new PostsRepository(defaultConfig);

postsRepo.count().then(postCount => {
  console.info(postCount);
  if (postCount <= 0) {
    postsRepo.populate();
  }
});

let app = (
	<Router>
          <App>
	    <Routes />
	  </App>
	</Router>
);

const init = () => {
	let root = render(app, document.getElementById("root"), root);
}

init()

if(module.hot) module.hot.accept('./App', init);

require('offline-plugin/runtime').install()
