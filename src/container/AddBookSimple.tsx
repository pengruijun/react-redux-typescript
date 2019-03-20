import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../action";
import { IBook } from "../type";



class AddBookSimple extends Component<any> {
     title: any;
     author: any;
     price: any;

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
        return (
            <form onSubmit={this.onFormSubmit} >
                <div><input ref={node => (this.title = node)} /> </div>
                <div><input ref={node => (this.author = node)} /></div>
                <div><input ref={node => (this.price = node)} /></div>
                <div><button type="submit">Add</button></div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => (
    {
        onAddClick: (book: IBook) => dispatch(add(book)),
    
    });

export default connect(null, mapDispatchToProps)(AddBookSimple);