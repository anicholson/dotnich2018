import { h, Component } from "preact";
import Markdown from "react-markdown";

import defaults from "../markdown/renderers";

const MarkdownPage = ({input}) => (
  <Markdown
    escapeHtml={false}
    source={input}
    renderers={defaults}
  />
);

export default MarkdownPage;
