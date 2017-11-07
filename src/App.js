import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cartpage from './CartPage';

class App extends Component {
  render() {
    const products=[{            // Provide product details in an impressionFieldObject.
      'id': 'P12345',                   // Product ID (string).
      'name': 'Android Warhol T-Shirt', // Product name (string).
      'category': 'Apparel/T-Shirts',   // Product category (string).
      'brand': 'Google',                // Product brand (string).
      'variant': 'Black',               // Product variant (string).
      'list': 'Search Results',         // Product list (string).
      'position': 1,                    // Product position (number).
      'dimension1': 'Member'            // Custom dimension (string).
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
