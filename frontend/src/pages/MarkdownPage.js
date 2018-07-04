import { h, Component } from "preact";
import Markdown from "react-markdown";

import { MarkdownRoot as root } from "../markdown/renderers";

const MarkdownPage = ({input}) => (

      <Markdown
        escapeHtml={false}
        source={input}
        renderers={{ root: root }}
      />
    );

export default MarkdownPage;
