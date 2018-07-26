import { h } from 'preact';
import { createComponent, createComponentWithProxy } from 'preact-fela';
import { P, List, ListItem } from '../../typography';

/*
default renderers = {
  root: 'div',
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,

  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml
}
*/

const noRules = (rule) => ({});

const MarkdownRoot = createComponentWithProxy(noRules, 'article');
const Break = createComponent(noRules, 'br');
const Paragraph = P;



const defaults = {
  root: MarkdownRoot,
  break: Break,
  paragraph: Paragraph,
  list: List,
  listItem: ListItem
};


export default defaults;
