import { createRenderer as createFelaRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import merge from 'lodash/fp/merge';

import colors from './colors'

import f2 from "./fonts/cooperhewitt-book-webfont.woff2";
import f3 from "./fonts/cooperhewitt-semibolditalic-webfont.woff";
import f4 from "./fonts/cooperhewitt-bookitalic-webfont.woff";
import f5 from "./fonts/cooperhewitt-bold-webfont.woff2";
import f7 from "./fonts/cooperhewitt-semibold-webfont.woff";
import f8 from "./fonts/cooperhewitt-bookitalic-webfont.woff2";
import f9 from "./fonts/cooperhewitt-semibolditalic-webfont.woff2";
import f11 from "./fonts/cooperhewitt-bolditalic-webfont.woff2";
import f13 from "./fonts/cooperhewitt-bolditalic-webfont.woff";
import f15 from "./fonts/cooperhewitt-semibold-webfont.woff2";
import f16 from "./fonts/cooperhewitt-book-webfont.woff";
import f17 from "./fonts/cooperhewitt-bold-webfont.woff";
import f18 from "./fonts/Born.otf";


export default function createRenderer(options = {}) {
  const rendererOptions = merge(
	  {
	  },
	  options
  )

	const renderer = createFelaRenderer(rendererOptions)

	renderer.renderStatic(`

@font-face {
    font-family: 'Born';
    src: url(${f18}) format('otf'),
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('${f5}') format('woff2'),
         url('${f17}') format('woff');
    font-weight: bold;
    font-style: normal;
}7


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('${f11}') format('woff2'),
         url('${f13}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Cooper Hewitt';
    src: url('${f2}') format('woff2'),
         url('${f16}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Cooper Hewitt';
    src: url('${f8}') format('woff2'),
         url('${f4}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Cooper Hewitt';
    src: url('${f15}') format('woff2'),
         url('${f7}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Cooper Hewitt';
    src: url('${f9}') format('woff2'),
         url('${f3}') format('woff');
    font-weight: 500;
    font-style: italic;

}

html {
  line-height: 1.45;
}

body {
  font-size: calc( 16px + ( 22 - 16 ) * ( ( 100vw - 600px ) / ( 1400 - 600 )));
  font-family: "Cooper Hewitt", "Helvetica Neue", Arial, sans-serif;
  background-color: ${colors.white};
}

`);

	return renderer;
}
