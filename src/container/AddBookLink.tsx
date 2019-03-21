import React from "react";
import { link } from "../action";
import { connect } from "react-redux";

const AddBookLink = (props: any) => {
    return (
        <a href="#" onClick={props.onAddLink} >Add Book</a>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    onAddLink: () => dispatch(link()),
});

export default connect(null, mapDispatchToProps)(AddBookLink);

