import React, { Component } from "react";
import { IBook, IBooksReduxStore } from "../type";

const BookList = (props: any) => {
    return (
        <div>
            <ul>
                {
                    props.books.map((book: IBook) => (
                    <li key={book.id} onClick={() => props.handleSelect(book.id)} >
                        
                            {book.title + " " + book.author + " $" + book.price}
                        
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default BookList;