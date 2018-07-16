import { h } from 'preact';
import { Link } from 'react-router-dom';
import { H4, P } from '../../typography';

export const Description = ({post, base}) => {
  return (
    <Link to={`${base}/${post.hash}`}>
      <div data-post-id={post.hash}>
        <H4>{post.title}</H4>
      </div>
    </Link>
  );
}
