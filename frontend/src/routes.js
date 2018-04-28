import React from "react";
import { Route } from "react-router-dom";

import { Homepage, ContactPage, Bio, CV } from "./pages";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cv" component={CV} />
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default Routes;
