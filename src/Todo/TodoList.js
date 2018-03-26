import React, { Component } from 'react';
// import './TodoList.css';
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props){
        props.default
        super(props);
        this.todoList = [];
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(){
        this.todoList.push({
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
                    <button onClick={this.addTodo}>+</button> 
                    {/* </form> */}
                </div>
                <div>
                    <ul>
                        {this.todoList.map((item) => <TodoItem key={item.id} item={item} />)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;
