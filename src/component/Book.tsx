import React from "react";
import { IBook } from "../type";

const Book = ({book} : {book: IBook}) => {
    return (
        <div>
            <div>ID: {book.id}</div>
            <div>TITLE: {book.title}</div>
            <div>AUTHOR: {book.author} </div>
            <div>PRICE: ${book.price}</div>
        </div>
    );
};

export default Book;