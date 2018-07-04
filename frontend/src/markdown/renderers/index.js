import React from "react";

//import styles from "../markdown_styling.module.scss";

const styles= {}

class MarkdownRoot extends React.PureComponent {
  render() {
    return <article className={styles.root}>{this.props.children}</article>;
  }
}

export { MarkdownRoot };
