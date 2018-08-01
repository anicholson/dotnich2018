// @flow
// @jsx h

import { h } from 'preact';
import { createComponentWithProxy } from 'preact-fela';

const commonRules = {
  fontFamily: 'Born, serif'
};

const P = createComponentWithProxy(() => ({
  ...commonRules,
  marginBottom: '1.3em'
}), 'p');

const Small = createComponentWithProxy(() => ({
  ...commonRules,
  fontSize: '0.75em'
}), 'small');

export { P, Small };
