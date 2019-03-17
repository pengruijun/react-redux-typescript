import { IBook } from "../type";


export const add = (book: IBook): any => ({
        type: "ADD",
        book
    });