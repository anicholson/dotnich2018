import { h } from 'preact';
import { Page } from '../Page';
import { H1, P } from '../../typography';
import { Description } from './Description';

export const Posts = ({match, posts}) => {
  let base = match.path;
  let entries = posts.map(post => (
    <Description base={base} post={post} key={post.hash} />
  ));

  return (
    <Page>
      <H1>Hi.</H1>
	    <P>I love words, and sometimes I event collect them and put them on the Internet.
	      <br />May you find something that resonates, challenges, or informs you :)</P>
      {entries}
    </Page>
  );
};
