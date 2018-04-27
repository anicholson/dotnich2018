import React, { Component } from 'react';
import { Writing, Bio, CV, Contact } from '../icons';

import styles from './site_nav.module.scss';

class SiteNav extends Component {
    render() {
	let s = this.props.size;
	return (
		<div className={styles.container}>
	    <ul className={styles.siteNav}>
	    <li><Writing size={s} /></li> 
	    <li><Bio     size={s} /></li>
	    <li><CV      size={s} /></li>
	    <li><Contact size={s} /></li>
		</ul>
		</div>
    );
    }
}

export default SiteNav;
