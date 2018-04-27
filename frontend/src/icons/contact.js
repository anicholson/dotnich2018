import React from 'react';
import styles from './icon.module.scss';

const Contact = ({size}) => {

    let oldSizeRatio = size / 134.0;

    return (
	    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
    <defs>
            <circle id="contact_b" cx={64 * oldSizeRatio} cy={64 * oldSizeRatio} r={64 * oldSizeRatio}/>
        <filter id="contact_a" width="112.1%" height="112.1%" x="-6%" y="-4.4%" filterUnits="objectBoundingBox">
            <feMorphology in="SourceAlpha" operator="dilate" radius=".5" result="shadowSpreadOuter1"/>
            <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.843137255 0 0 0 0 0.717647059 0 0 0 0 0.529411765 0 0 0 1 0"/>
        </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
            <g transform="translate(3 3)">
            <use fill="#000" filter="url(#contact_a)" xlinkHref="#contact_b"/>
            <use className={styles.background} xlinkHref="#contact_b"/>
        </g>
            <path className={styles.mainColor} fillRule="nonzero" d="M92.894 43H41.482C35.14 43 30 48.14 30 54.479v23.388c0 6.339 5.14 11.482 11.482 11.482l-3.967 15.841L65.013 89.35h27.881c6.348 0 11.488-5.143 11.488-11.482V54.479c0-6.339-5.14-11.479-11.488-11.479zm-42.84 27.867h-.697a5.288 5.288 0 0 1 0-10.575h.697a5.283 5.283 0 0 1 5.286 5.287 5.287 5.287 0 0 1-5.286 5.288zm17.63 0h-.692a5.287 5.287 0 0 1-5.29-5.288 5.285 5.285 0 0 1 5.29-5.287h.691a5.289 5.289 0 0 1 5.29 5.287 5.291 5.291 0 0 1-5.29 5.288zm17.63 0h-.695a5.286 5.286 0 0 1-5.287-5.288 5.283 5.283 0 0 1 5.287-5.287h.695a5.284 5.284 0 0 1 5.288 5.287 5.287 5.287 0 0 1-5.288 5.288z"/>
    </g>
	    </svg>
    )

};

export default Contact;
