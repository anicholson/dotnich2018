import { h, Component } from 'preact';
import PostsRepository, { defaultConfig } from "../PostsRepository";
import { Link } from "react-router-dom";

import { Page } from './Page';
import PropsRoute from "../propsRoute";
import MarkdownPage from "./MarkdownPage";
import { H1, H4, P } from '../typography';
import { Post, Posts, Description } from './Writing';

class WritingPage extends Component {
  constructor(props) {
    super(props);
    this.repo = new PostsRepository(defaultConfig);
    this.state = { posts: [] };
  }

  async componentWillMount() {
    this.repo
      .all()
      .then(keys => {
        let posts = keys.map(key => this.repo.find(key));

        return Promise.all(posts);
      })
	  .then(posts => {
	      posts.sort((a,b) => {
		  let aDate = Date.parse(a.date);
		  let bDate = Date.parse(b.date);

		  return bDate - aDate;
	      })
        this.setState({ posts: posts });
      });
  }

  render() {
    let basePath = this.props.match.path;
    let routes = this.state.posts.map(post => (
      <PropsRoute
        exact
        key={`post-${post.hash}`}
        post={post}
        path={`${basePath}/${post.hash}`}
        component={Post}
      />
    ));

    let showIndex = this.props.match.isExact;

    if (showIndex) {
      return (
          <Posts match={this.props.match} posts={this.state.posts} />
      );
    } else {
      return <div>{routes}</div>;
    }
  }
}

export default WritingPage;
