import React from "react";
import MarkdownPage from "./MarkdownPage";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.content = "# Get in Touch";
  }

  render() {
    console.log(this.props);
    return <MarkdownPage input={this.content} />;
  }
}

export default ContactPage;
