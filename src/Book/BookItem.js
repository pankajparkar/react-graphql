import React, { Component } from 'react';

class BookItem extends Component {
    constructor(props){
        // props.default
        super(props);
        this.remove = this.remove.bind(this);
    }
    remove(){
        this.props.remove(this.props.item.id)
    }
    render() {
        return <li>
            {this.props.item.title}
            <button type="button" onClick={this.remove}>x</button> 
        </li>;
  }
}

export default BookItem;
