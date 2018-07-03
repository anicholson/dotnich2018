import React from "react";
//import styles from "./icon.module.scss";

const styles = {};

const CV = ({ size }) => {
  let oldSizeRatio = size / 134.0;
  return (
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
          id="cv_b"
          cx={64 * oldSizeRatio}
          cy={64 * oldSizeRatio}
          r={64 * oldSizeRatio}
        />
        <filter
          id="cv_a"
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
        <g transform="translate(4 3)">
          <use fill="#000" filter="url(#cv_a)" xlinkHref="#cv_b" />
          <use className={styles.background} xlinkHref="#cv_b" />
        </g>
        <g fill="#5E5553" fillRule="nonzero">
          <path
            className={styles.mainColor}
            d="M35.208 32.357c9.3-2.926 8.674 13.1.192 12.289-6.099-.584-5.645-10.574-.192-12.289zM102.442 34.99c-1.234 5.847-10.202 3.414-16.333 3.533-5.286.105-11.38.538-16.787.673-5.437.135-11.829 1.761-14.78-1.816 2.221-3.761 8.794-2.342 12.66-2.657 6.583-.534 14.941-.62 20.886-.736 4.494-.091 10.061-.29 14.354 1.002zM40.963 59.717c5.465 7.202-4.474 14.85-8.863 9.563-3.608-4.345 1.16-10.961 8.863-9.563zM102.884 63.253c-.59 4.097-5.54 2.956-8.555 3.003-11.1.175-21.713 1.148-31.12 1.308-3.057.049-6.585-.005-9.035-1.497-.78-3.93 4.107-3.758 8.134-3.817 8.85-.129 21.757.053 31.957-.09 3.188-.047 6.66-1.884 8.619 1.093zM39.89 95.79c-2.25.435-3.4 1.762-5.714 1.317-10.557-2.018 1.616-18.184 6.789-11.166 2.208 2.993.117 6.321-1.075 9.848zM102.081 90.31c-3.678 3.335-10.766 1.5-17.588 1.913-7.59.457-15.008 1.352-22.1 1.574-2.895.09-6.014 1.378-7.808-1.517.074-4.816 4.432-3.245 7.731-3.397 5.066-.237 10.986-.643 17.195-.68 8.092-.053 17.944-3.146 22.57 2.106z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CV;
