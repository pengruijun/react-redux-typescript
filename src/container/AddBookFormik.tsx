
import { connect } from "react-redux";
import AddBook from "../component/AddBook";
import {add, addBookAndLog} from "../action";
import { IBook } from "../type";

const mapDispatchToProps = (dispatch: any) => ({
    onSubmit: (book: IBook) => dispatch(addBookAndLog(book))
});

export default connect(null, mapDispatchToProps)(AddBook);