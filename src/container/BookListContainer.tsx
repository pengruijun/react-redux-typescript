import React, { Component } from "react";
import { connect } from "react-redux";
import BookList from "../component/BookList";
import { IBooksReduxStore } from "../type";

const mapStateToProps = (state: IBooksReduxStore) => ({
    books: state.books,
});

export default connect(mapStateToProps)(BookList);
