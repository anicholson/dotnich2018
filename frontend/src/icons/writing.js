import { h } from 'preact';
//import styles from "./icon.module.scss";

const styles = {}

const Writing = ({ size }) => (
  <svg
    className={styles.icon}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
  >
    <defs>
      <circle
        className={styles.background}
        id="writing_b"
        cx="64"
        cy="64"
        r="58"
      />
      <filter
        id="writing_a"
        width="112.1%"
        height="112.1%"
        x="-5.2%"
        y="-4.4%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius=".5"
          result="shadowSpreadOuter1"
        />
        <feOffset
          dx="1"
          dy="2"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.843137255 0 0 0 0 0.717647059 0 0 0 0 0.529411765 0 0 0 1 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 0)">
        <use fill="#000" filter="url(#writing_a)" xlinkHref="#writing_b" />
        <use fill="#AAA7A2" stroke="#979797" xlinkHref="#writing_b" />
      </g>
      <g fillRule="nonzero">
        <path
          className={styles.mainColor}
          d="M29.29 96.119c2.544-2.959 13.035-14.15 25.501-13.199 0 0 1.389-10.568 8.804-18.051l-7.222-5.391-7.222-5.394c-5.007 9.28-14.688 13.654-14.688 13.654 4.493 11.715-3.164 25.02-5.257 28.317a2.029 2.029 0 0 0-2.803.446 2.049 2.049 0 0 0 .418 2.86 2.029 2.029 0 0 0 2.848-.42c.66-.89.487-2.141-.379-2.822zm16.209-27.103a3.045 3.045 0 0 1 4.272-.631 3.074 3.074 0 0 1 .628 4.291 3.045 3.045 0 0 1-4.273.63 3.074 3.074 0 0 1-.627-4.29zM67.344 64.612l3.107-4.19-19.028-14.208-3.107 4.191z"
        />
        <path
          className={styles.mainColor}
          d="M105.723 92.805c-3.045-2.166-5.452-3.875-9.934-3.535-3.03.233-4.808 1.828-6.529 3.37-.449.401-.912.817-1.404 1.216-3.098 2.512-5.755 4.434-9.338 4.434h-.028c-1.86-.006-2.896-.495-4.465-1.235-.626-.295-1.335-.631-2.162-.958-7.592-2.994-14.755-2.207-23.234 2.556-4.43 2.487-10.988 4.774-17.066 1.543l-1.51 2.862c2.44 1.297 5.136 1.942 7.986 1.942 3.856 0 7.995-1.18 12.162-3.521 7.659-4.3 13.784-5.01 20.48-2.368.729.288 1.36.587 1.97.874 1.673.789 3.254 1.536 5.828 1.541h.037c4.624 0 8.015-2.436 11.365-5.151.554-.449 1.05-.892 1.527-1.323 1.557-1.396 2.685-2.407 4.623-2.553 3.325-.259 5.02.95 7.828 2.945l.279.198L106 93l-.277-.194z"
        />
        <path
          className={styles.mainColor}
          d="M71.846 58.539L96.695 25H67.139L52.818 44.33z"
        />
      </g>
    </g>
  </svg>
);

export default Writing;
