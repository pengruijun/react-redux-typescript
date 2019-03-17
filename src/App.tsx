import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookListContainer  from  "./container/BookListContainer";
import AddBook from "./container/AddBook";
//import BookList from "./component/BookList"; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 1
          </a>
          <div>
            <BookListContainer />
            <AddBook />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
