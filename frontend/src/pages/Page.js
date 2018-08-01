// @flow
// @jsx h

import { h } from 'preact';
import { createComponentWithProxy } from 'preact-fela';

export const Page = createComponentWithProxy((rules) => ({
  margin: '0 5vw',
  width: '80vw'
}), 'article');
