import { h } from 'preact';
import { Page } from '../Page';
import MarkdownPage from "../MarkdownPage";
import { H1 } from '../../typography';

const Post = ({post}) => {
  let content = post["__content"];

  return (
    <Page>
      <H1>{post.title}</H1>
      <MarkdownPage input={content} />
    </Page>
  );
};

export { Post };
