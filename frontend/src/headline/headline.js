import { h } from 'preact';
//import styles from "./headline.module.scss";

const styles = {}

const Headline = (props) => (
      <header className={styles.container}>
        <h1 className={styles.title}>.nich</h1>
        <h2 className={styles.subline}>build people, build software</h2>
      </header>
)

export default Headline;
