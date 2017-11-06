import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cartpage from './CartPage';

class App extends Component {
  render() {
    const products=[{ 
      'SKU': '23455',
      'Price': '67',
      'ProductId': 'No2'
    }]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Cartpage products={products} />
      </div>
    );
  }
}

export default App;
