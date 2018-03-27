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
        axios.post(`http://localhost:4000/graphql`, { 'query': `mutation{createBook(title: "${book.title}", author:"Anonymous"){title}}`})
        .then(res => {
            this.getBooks()
        })
    }

    getBooks(){
        axios.post(`http://localhost:4000/graphql`,{'query':`{books{title author}}`})
        .then(res => {
            this.bookList = res.data.data.books;
            this.setState({ books: this.bookList });
        })
    }
    
    render() {
        return (
            <div className="todo-list-container">
                <div className="add-todo">
                    <input id="add-item" ref={(input) => this.textInput = input}/>
                    <button type="button" onClick={this.addBook}>+</button> 
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
