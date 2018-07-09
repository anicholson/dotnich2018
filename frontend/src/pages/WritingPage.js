import { h, Component } from 'preact';
import PostsRepository, { defaultConfig } from "../PostsRepository";
import { Link } from "react-router-dom";

import { Page } from './Page';
import PropsRoute from "../propsRoute";
import MarkdownPage from "./MarkdownPage";
import { H1, H4, P } from '../typography';

class Post extends Component {
  render() {
    let post = this.props.post;
    let content = post["__content"];

    return (
      <Page>
        <H1>{post.title}</H1>
        <MarkdownPage input={content} />
      </Page>
    );
  }
}

class PostDescription extends Component {
  render() {
    let post = this.props.post;
    return (
      <Link to={`${this.props.base}/${post.hash}`}>
        <div data-post-id={post.hash}>
          <H4>{post.title}</H4>
          <P>{JSON.stringify(post.keys)}</P>
        </div>
      </Link>
    );
  }
}

class Index extends Component {
  render() {
    let base = this.props.match.path;
    let posts = this.props.posts.map(post => (
      <PostDescription base={base} post={post} key={post.hash} />
    ));

    return (
      <Page>
        <H1>Hi.</H1>
	      <P>I love words, and sometimes I event collect them and put them on the Internet.
	      <br />May you find something that resonates, challenges, or informs you :)</P>
      {posts}
    </Page>
    );
  }
}

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
          <Index match={this.props.match} posts={this.state.posts} />
      );
    } else {
      return <div>{routes}</div>;
    }
  }
}

export default WritingPage;
