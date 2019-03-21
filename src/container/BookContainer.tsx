import { IBooksReduxStore, IBook } from "../type";
import { connect } from "react-redux";
import Book from "../component/Book";

const selectorBook = (state: IBooksReduxStore) => {
    let book = state.books.find(b => b.id == state.selectedId);
    if(book == undefined) {
        return {} as IBook;
    }
    return book;
}
const mapStateToProps = (state: IBooksReduxStore) => ({
    book: selectorBook(state),
});

export default connect(mapStateToProps)(Book);