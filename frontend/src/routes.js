import React from "react";
import { Route } from "react-router-dom";

import { Homepage, ContactPage } from "./pages";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default Routes;
