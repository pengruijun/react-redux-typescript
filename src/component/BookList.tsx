import React, { Component } from "react";
import { IBook, IBooksReduxStore } from "../type";

const BookList = ({books} : {books: IBook[]}) => {
    return (
        <div>
            <ul>
                {
                    books.map((book, index) => (
                    <li key={index}>{book.title + " " + book.author + " $" + book.price}</li>
                ))
                }
            </ul>
        </div>
    );
}

export default BookList;