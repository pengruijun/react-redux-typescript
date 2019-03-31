import { IBooksReduxStore, IBook } from "../type";
import { connect } from "react-redux";
import Book from "../component/Book";

const selectorBook = (state: IBooksReduxStore, id: number) => {
    let book = state.books.find(b => b.id == id);
    if(book == undefined) {
        return {} as IBook;
    }
    return book;
}
const mapStateToProps = (state: IBooksReduxStore, ownProps: any) => ({
    book: selectorBook(state, ownProps.match.params.number),
});

export default connect(mapStateToProps)(Book);