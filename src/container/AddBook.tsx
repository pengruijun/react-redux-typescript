import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../action";
import { IBook } from "../type";



class AddBook extends Component<any> {
    test: number;
     title: any;
     author: any;
     price: any;

    constructor(props:any)
    {
        super(props);
        this.test = 123;
    }
     onFormSubmit = (e: any) => {
        e.preventDefault();
        this.props.onAddClick(
            {
                title: this.title.value, 
                author: this.author.value, 
                price: this.price.value
            }
        );
    };

    render() {
        // return (
        //     <div>
        //      Title: <input type="text" /> <br />
        //      Author: <input type="text" /> <br />
        //      Price: $<input type="text" /> <br />
        //      <button onClick={this.props.onAddClick}>Add</button>
        //     </div>
        // );
        return (
            <form onSubmit={this.onFormSubmit} >
                <input ref={node => (this.title = node)} />
                <input ref={node => (this.author = node)} />
                <input ref={node => (this.price = node)} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => (
    {
        onAddClick: (book: IBook) => dispatch(add(book)),
    
    });

export default connect(null, mapDispatchToProps)(AddBook);