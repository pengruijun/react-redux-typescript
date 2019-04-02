import { IBook } from "../type";



export const add = (book: IBook): any => ({
        type: "ADD",
        book
    });

export const show = (selectedId: number) => ({
    type: "SELECT",
    selectedId,
});

export const link = () => ({
    type: "LINK",
});

export const addBookAndLog = (book: IBook): any => {
    return async (dispatch: any) => {
        console.log(`add a new book ${book.title}`);
        dispatch(add(book));
    };
}