import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import { CurrentLocation } from './Components/CurrentLocation';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        
       
         <CurrentLocation></CurrentLocation>
        </div>
      </Provider>
    );
  }
}

export default App;
