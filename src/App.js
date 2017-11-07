import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cartpage from './CartPage';

class App extends Component {
  render() {
    const products = [
      {
        'id': 'P11111',
        'name': 'IOS Warhol T-Shirt',
        'category': 'Apparel/T-Shirts',
        'brand': 'Apple',
        'variant': 'Red',
        'list': 'Search Results',
        'position': 2,
        'dimension1': 'Member'
      }, {
        'id': 'P12345',
        'name': 'Android Warhol T-Shirt',
        'category': 'Apparel/T-Shirts',
        'brand': 'Google',
        'variant': 'Black',
        'list': 'Search Results',
        'position': 1,
        'dimension1': 'Member'
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
