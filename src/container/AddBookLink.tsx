import React from "react";
import { link } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AddBookLink = () => {
    return (
        <div>
            <Link to="/add">Add Book</Link>
        </div>
    );
}

// const mapDispatchToProps = (dispatch: any) => ({
//     onAddLink: (e: Event) => {
//         e.preventDefault();
//         dispatch(link())
//     },
// });

// export default connect(null, mapDispatchToProps)(AddBookLink);
export default AddBookLink;
