import { createRenderer as createFelaRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import merge from 'lodash/fp/merge';

import colors from './colors'

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
    src: url('/fonts/Born.otf') format('otf'),
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('/fonts/cooperhewitt-bold-webfont.woff2') format('woff2'),
         url('/fonts/cooperhewitt-bold-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('/fonts/cooperhewitt-bolditalic-webfont.woff2') format('woff2'),
         url('/fonts/cooperhewitt-bolditalic-webfont.woff') format('woff');
    font-weight: bold;
    font-style: italic;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('/fonts/cooperhewitt-book-webfont.woff2') format('woff2'),
         url('/fonts/cooperhewitt-book-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('/fonts/cooperhewitt-bookitalic-webfont.woff2') format('woff2'),
         url('/fonts/cooperhewitt-bookitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: italic;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('/fonts/cooperhewitt-semibold-webfont.woff2') format('woff2'),
         url('/fonts/cooperhewitt-semibold-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('/fonts/cooperhewitt-semibolditalic-webfont.woff2') format('woff2'),
         url('/fonts/cooperhewitt-semibolditalic-webfont.woff') format('woff');
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