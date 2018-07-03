import { createRenderer as createFelaRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import merge from 'lodash/fp/merge';

import colors from './colors'

const [extend, embedded, addVendorPrefixes, resolveFallbackValues, orderLVHA,other ] = webPreset

const defaultPlugins = [ embedded, addVendorPrefixes ]

export default function createRenderer(options = {}) {
	console.info("web Preset", embedded);
  const rendererOptions = merge(
	  {
		  plugins: defaultPlugins
	  },
	  options
  )

	const renderer = createFelaRenderer(rendererOptions)

	renderer.renderStatic(`


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('src/fonts/cooperhewitt-bold-webfont.woff2') format('woff2'),
         url('src/fonts/cooperhewitt-bold-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('src/fonts/cooperhewitt-bolditalic-webfont.woff2') format('woff2'),
         url('src/fonts/cooperhewitt-bolditalic-webfont.woff') format('woff');
    font-weight: bold;
    font-style: italic;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('src/fonts/cooperhewitt-book-webfont.woff2') format('woff2'),
         url('src/fonts/cooperhewitt-book-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('src/fonts/cooperhewitt-bookitalic-webfont.woff2') format('woff2'),
         url('src/fonts/cooperhewitt-bookitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: italic;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('src/fonts/cooperhewitt-semibold-webfont.woff2') format('woff2'),
         url('src/fonts/cooperhewitt-semibold-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;

}


@font-face {
    font-family: 'Cooper Hewitt';
    src: url('src/fonts/cooperhewitt-semibolditalic-webfont.woff2') format('woff2'),
         url('src/fonts/cooperhewitt-semibolditalic-webfont.woff') format('woff');
    font-weight: 500;
    font-style: italic;

}

html {
  font-size: 18px;
  line-height: 28px;
}

body {
  font-family: "Cooper Hewitt", "Helvetica Neue", Arial, sans-serif;
  background-color: ${colors.white};
}

`);

	return renderer;
}
