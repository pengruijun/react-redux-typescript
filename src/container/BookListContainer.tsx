import React, { Component } from "react";
import { connect } from "react-redux";
import BookList from "../component/BookList";
import { IBooksReduxStore } from "../type";
import { show } from "../action";

const mapStateToProps = (state: IBooksReduxStore) => ({
    books: state.books,
});

// const mapDispatchToProps = (dispatch: any) => ({
//     handleSelect: (id: number) => {
//         dispatch(show(id));
//     },
// });

export default connect(mapStateToProps)(BookList);
