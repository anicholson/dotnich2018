import { h } from 'preact';
import { connect } from 'preact-fela';

import colors from '../colors';

const rules = () => ({
  container: {

  },
  title: {
    color: colors.cinnamon
  },

  subline: {
    color: colors.cinnamon
  }
});

const Headline = ({styles}) => (
  <header className={styles.container}>
    <h1 className={styles.title}>.nich</h1>
    <h2 className={styles.subline}>build people, build software</h2>
  </header>
);

export default connect(rules)(Headline);
