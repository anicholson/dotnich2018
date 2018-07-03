import React from "react";
//import styles from "./headline.module.scss";

const styles = {}

class Headline extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <h1 className={styles.title}>.nich</h1>
        <h2 className={styles.subline}>build people, build software</h2>
      </header>
    );
  }
}

export default Headline;
