import React from "react";
import AddBookFormik from "./AddBookFormik";
import BookContainer from "./BookContainer";
import { IBooksReduxStore } from "../type";
import { connect } from "react-redux";

const BookOrAdd = ({selectedId}: {selectedId: number}) => {
    return (
        selectedId == -1 ? <AddBookFormik /> : <BookContainer />
    );
}

const mapStateToProps = (state: IBooksReduxStore) => ({
    selectedId: state.selectedId
});

export default connect(mapStateToProps)(BookOrAdd);