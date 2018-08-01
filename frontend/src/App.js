// @flow
// @jsx h

import { h } from 'preact';
import DefaultMeta from './meta';

type AppProps = {
  children: *,
}

const App = ({children} : AppProps) => (
    <div className='application'>
    <DefaultMeta/>
    { children }
  </div>
);

export default App;
