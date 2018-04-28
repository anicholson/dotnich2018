import React, { Component } from "react";
import Markdown from "react-markdown";

class MarkdownPage extends Component {
  render() {
    return <Markdown source={this.props.input} />;
  }
}

export default MarkdownPage;
