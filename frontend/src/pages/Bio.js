import React from "react";
import MarkdownPage from "./MarkdownPage";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.content = "# Bio";
  }

  render() {
    console.log(this.props);
    return <MarkdownPage input={this.content} />;
  }
}

export default Bio;
