import { h } from 'preact';
import DefaultMeta from './meta';

const App = ({children}) => (
    <div className='application'>
    <DefaultMeta/>
    { children }
  </div>
);

export default App;
