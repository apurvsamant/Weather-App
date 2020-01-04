import React, { Component } from 'react';
import './App.css';

import { CurrentLocation } from './Components/CurrentLocation';



class App extends Component {
  render() {
    return (
        <div className="App">
         <CurrentLocation></CurrentLocation>
        </div>
    );
  }
}

export default App;
