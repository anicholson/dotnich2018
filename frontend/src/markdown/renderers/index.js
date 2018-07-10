import { h } from 'preact';

const styles= {}

const MarkdownRoot = ({children}) => (
    <article className={styles.root}>{children}</article>
);

export { MarkdownRoot };
