import React from "react";
import { Route } from "react-router-dom";

import {
//  Homepage,
  ContactPage,
//  Bio,
//  CV,
//  WritingPage,
//  SampleMarkdownPage
} from "./pages";

class Routes extends React.Component {
  render() {
    return (
      <div>
        {/*<Route path="/bio" component={Bio} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cv" component={CV} />
        <Route path="/writing" component={WritingPage} />
	*/}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/design" component={SampleMarkdownPage} />
      </div>
    );
  }
}

export default Routes;
