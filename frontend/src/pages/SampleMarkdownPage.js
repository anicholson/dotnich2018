import React from "react";
import MarkdownPage from "./MarkdownPage";

class SampleMarkdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.content = `

# Level One


Here is an example paragraph below a level one Heading. It consists of two sentences of a fairly short length.

## Level Two

This level contains a paragraph and a code block!

      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run \`npm start\` or \`yarn start\`.
      To create a production bundle, use \`npm run build\` or \`yarn build\`.

> It also contains a blockquote itself, for these must both be included.
> &mdash; Me

### Level 3.

Herewith, a bulleted list:

* Item One
* Item Two
* Item Three

and a numbered one:

1. Item _One_
2. Item **Two**
3. [Item Three][1]

`;
  }

  render() {
    console.log(this.props);
    return <MarkdownPage input={this.content} />;
  }
}

export default SampleMarkdownPage;
