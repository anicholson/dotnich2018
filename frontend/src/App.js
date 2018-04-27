import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Writing, Bio, CV, Contact } from './icons';

class App extends Component {
  render() {
    const size = 124;
    return (
      <div className="App">
            <div>
	    <ul>
            <li><Writing size={size} /></li>
	    <li><Bio size={size} /></li>
	    <li><CV size={size} /></li>
	    <li><Contact size={size} /></li>
	    </ul>
        </div>
      </div>
    );
  }
}

export default App;
