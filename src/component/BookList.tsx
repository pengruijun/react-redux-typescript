import React, { Component } from "react";
import { IBook, IBooksReduxStore } from "../type";
import { Link } from "react-router-dom";

const BookList = (props: any) => {
    return (
        <div>
            <ul>
                {
                    props.books.map((book: IBook) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}>
                                {book.title}
                            </Link>  
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BookList;