import React, { Component } from 'react';
import './App.scss';

import SiteNav from './site_nav';
import Headline from './headline';

class App extends Component {
  render() {
    const size = 124;
    return (
	    <div className="App">
	    <Headline />
	    <SiteNav size={size} />
      </div>
    );
  }
}

export default App;
