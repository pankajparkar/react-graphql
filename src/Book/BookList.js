import React, { Component } from 'react';
import BookItem from './BookItem';
import axios from 'axios';

class BookList extends Component {
    constructor(props){
        super(props);
        this.bookList = [];
        this.addBook = this.addBook.bind(this);
    }
    addBook(){
        let book = {
            id: Math.random(),
            title: this.textInput.value,
            author: 'Anonymous'
        }
        this.saveBook(book)
        this.textInput.value = '';
    }

    componentDidMount(){
        this.getBooks();
    }

    saveBook(book){
        //make an ajax to save books
        //then call getBooks() method
        axios.post(`http://localhost:4000/graphql?mutation={ createBook(title: ${book.title}, author: ${book.author}){title%20author%20}}`)
        .then(res => {
            //created book
            this.getBooks()
        })
    }

    getBooks(){
        debugger
        axios.get(`http://localhost:4000/graphql?query={%20books%20{title%20author%20}}`)
        .then(res => {
            this.bookList = res.data.data.books;
            debugger
            this.setState({ books: this.bookList });
        })
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
