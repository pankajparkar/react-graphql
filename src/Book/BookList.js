import React, { Component } from 'react';
import BookItem from './BookItem';
import axios from 'axios';

class BookList extends Component {
    constructor(props){
        super(props);
        this.bookList = [];
        this.addBook = this.addBook.bind(this);
        this.remove = this.remove.bind(this);
    }
    addBook(){
        let book = {
            id: Number((Math.random()*100).toFixed()),
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
        //validations before insert
        //create a mutation query and pass variables
        axios.post(`http://localhost:4000/graphql`, { 
            'query': `mutation{createBook(id: ${book.id}, title: "${book.title}", author:"Anonymous"){title}}`
        })
        .then(res => this.getBooks());
    }

    getBooks(){
        axios.post(`http://localhost:4000/graphql`,{
            'query':`{books{id title author}}`
        })
        .then(res => {
            this.bookList = res.data.data.books;
            this.setState({ books: this.bookList });
        });
    }

    remove(id){
        //create a delete query and pass variable
        axios.post(`http://localhost:4000/graphql`,{
            'query':`mutation{deleteBook(id: "${id}")}`
        })
        .then(res => this.getBooks());
    }
    
    render() {
        return (
            <div className="todo-list-container">
                <div className="add-todo">
                    <input placeholder="Enter text here" id="add-item" ref={(input) => this.textInput = input}/>
                    <button type="button" onClick={this.addBook}>+</button> 
                </div>
                <div>
                    <ul>
                        {this.bookList.map((item, index) =>
                            <BookItem key={index} item={item} remove={this.remove}/>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default BookList;
