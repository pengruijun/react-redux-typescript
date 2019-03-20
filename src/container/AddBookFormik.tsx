
import { connect } from "react-redux";
import AddBook from "../component/AddBook";
import {add} from "../action";
import { IBook } from "../type";

const mapDispatchToProps = (dispatch: any) => ({
    onSubmit: (book: IBook) => dispatch(add(book))
});

export default connect(null, mapDispatchToProps)(AddBook);