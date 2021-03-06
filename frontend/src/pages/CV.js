import React from "react";
import MarkdownPage from "./MarkdownPage";

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.content = "# CV";
  }

  render() {
    console.log(this.props);
    return <MarkdownPage input={this.content} />;
  }
}

export default CV;
