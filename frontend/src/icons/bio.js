import { h } from 'preact';
import { connect } from 'preact-fela';

import rules from './iconStyles';

const Bio = ({ styles, size }) => (
  <svg
    className={styles.icon}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
  >
    <defs>
      <filter
        id="bio_a"
        width="112.1%"
        height="112.1%"
        x="-5.6%"
        y="-4.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dx="1" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0.843137255 0 0 0 0 0.717647059 0 0 0 0 0.529411765 0 0 0 1 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <circle cx="64" cy="64" r="58" className={styles.background} id="bio_b" />
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      filter="url(#bio_a)"
      transform="translate(0 0)"
    >
      <g>
        <use className={styles.background} xlinkHref="#bio_b" />
      </g>
      <path
        className={styles.mainColor}
        fillRule="nonzero"
        d="M91.842 107.833c-1.834-4.731-5.124-28.016-2.268-32.254l.522-.766c7.564-11.113 9.846-14.468 9.846-25.788 0-10.993-10.033-28.433-36.956-28.433-19.86 0-30.18 7.734-31.553 23.644-.117 1.354-.055 3.733.004 6.033.15 5.836.135 8.521-.649 9.883-1.147 2.728-3.87 5.523-6.066 7.777-.673.693-1.523 1.564-2.038 2.173.504.303 1.221.67 1.757.942 2.078 1.059 4.04 2.059 4.701 3.651.445 1.07.102 2.31-.516 4.225l-.023.07c2.534.642 3.053 1.54 3.194 2.36.06.349.142 1.552-1.325 2.325l-.168.079a2.895 2.895 0 0 0-.584.305c1.496.928 3.725 2.615 3.939 4.531.098.875-.205 1.699-.856 2.339-1.163 1.489-.984 2.58-.726 3.151.24.091.496.237.76.459 2.366 1.985 6.703 2.576 12.202 1.65 15.48-2.676 16.075-11.965 16.092-12.36V71.92h3.71v11.972c-.014.561-.564 12.619-19.158 15.834-4.431.742-10.426.97-14.56-1.926-.471-.065-1.026-.312-1.588-.945-1.197-1.342-2.455-4.531.286-8.065-.439-.549-1.607-1.452-2.706-2.064l-.35-.193-.235-.317c-.17-.23-.998-1.456-.547-3.008.079-.268.206-.572.409-.886a2.101 2.101 0 0 1-1.11-.43c-1.2-.945-.759-2.315-.2-4.046.17-.528.468-1.454.534-1.913-.445-.459-2.027-1.266-2.905-1.715-2.306-1.173-4.296-2.189-4.097-4.123.125-1.219 1.134-2.301 3.407-4.633 2.015-2.068 4.522-4.64 5.367-6.759l.21-.384c.312-.793.196-5.281.128-7.962-.064-2.506-.125-4.873.008-6.42C29.277 26.063 41.137 17 62.987 17c29.627 0 40.668 19.643 40.668 32.024 0 12.397-2.849 16.581-10.46 27.764l-.516.758c-1.698 2.655.49 25.056 2.508 30.256l-3.345.031z"
      />
    </g>
  </svg>
);

export default connect(rules)(Bio);
