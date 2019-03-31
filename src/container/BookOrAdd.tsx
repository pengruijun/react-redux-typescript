import React from "react";
import AddBookFormik from "./AddBookFormik";
import BookContainer from "./BookContainer";
import { IBooksReduxStore } from "../type";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";

// const BookOrAdd = ({selectedId}: {selectedId: number}) => {
//     return (
//         selectedId == -1 ? <AddBookFormik /> : <BookContainer />
//     );
// }

const BookOrAdd = () => {
    return (
        <Switch>
            <Route exact path="/book/:number" component={BookContainer} />
            <Route exact path="/add" component={AddBookFormik} />
        </Switch>
    );
}

const mapStateToProps = (state: IBooksReduxStore) => ({
    selectedId: state.selectedId
});

export default connect(mapStateToProps)(BookOrAdd);