import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './Book/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BookList />
      </div>
    );
  }
}

export default App;
