import React, { Component } from "react";
import logo from './logo.svg';
import "./App.css";
import BookListContainer  from  "./container/BookListContainer";
import AddBookSimple from "./container/AddBookSimple";
import AddBookFormik from './container/AddBookFormik';
import BookContainer from './container/BookContainer';
import BookOrAdd from './container/BookOrAdd';
import AddBookLink from "./container/AddBookLink";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div style={{float: "left"}}>
            <BookListContainer />
            <AddBookLink />
          </div>
          <div>
            {/* <AddBookSimple /> */}
            <BookOrAdd />
          </div>
      </div>
    );
  }
}

export default App;
