import React, { Component } from 'react';
import BookItem from './BookItem'

class BookList extends Component {
    constructor(props){
        props.default
        super(props);
        this.bookList = [];
        this.addBook = this.addBook.bind(this);
    }
    addBook(){
        this.bookList.push({
            id: Number(Math.random()).toFixed(0),
            title: this.textInput.value,
            author: 'Anonymous'
        });
        this.textInput.value = '';
        this.setState({1: 1});
    }
    
    render() {
        return (
            <div className="todo-list-container">
                <div className="add-todo">
                    {/* <form noValidate name="addItem" onSubmit={this.onSubmit}> */}
                    <input id="add-item" ref={(input) => this.textInput = input}/>
                    <button onClick={this.addBook}>+</button> 
                    {/* </form> */}
                </div>
                <div>
                    <ul>
                        {this.bookList.map((item) => <BookItem key={item.id} item={item} />)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BookList;
