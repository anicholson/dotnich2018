import React, { Component } from "react";
import Markdown from "react-markdown";

import { MarkdownRoot as root } from "../markdown/renderers";

class MarkdownPage extends Component {
  render() {
    return <Markdown source={this.props.input} renderers={{ root: root }} />;
  }
}

export default MarkdownPage;
