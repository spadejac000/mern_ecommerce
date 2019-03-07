import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="container">
            <Products />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
