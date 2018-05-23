import React from "react";
import PostsRepository, { defaultConfig } from "../PostsRepository";
import { Link, Route } from "react-router-dom";
import PropsRoute from "../propsRoute";
import MarkdownPage from "./MarkdownPage";

class Post extends React.PureComponent {
  render() {
    let post = this.props.post;
    let content = post["__content"];
    return (
      <article>
        <h1>{post.title}</h1>
        <MarkdownPage input={content} />
      </article>
    );
  }
}

class PostDescription extends React.PureComponent {
  render() {
    let post = this.props.post;
    return (
      <Link to={`${this.props.base}/${post.hash}`}>
        <div data-post-id={post.hash}>
          <h2>{post.title}</h2>
          <p>{JSON.stringify(post.keys)}</p>
        </div>
      </Link>
    );
  }
}

class Index extends React.PureComponent {
  render() {
    let base = this.props.match.path;
    let posts = this.props.posts.map(post => (
      <PostDescription base={base} post={post} key={post.hash} />
    ));

    return (
      <div>
        <h1>Hi.</h1>
        {posts}
      </div>
    );
  }
}

class WritingPage extends React.Component {
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
        <div>
          <Index match={this.props.match} posts={this.state.posts} />
        </div>
      );
    } else {
      return <div>{routes}</div>;
    }
  }
}

export default WritingPage;
