import React, { Component } from 'react';

class BookItem extends Component {
    constructor(props){
        // props.default
        super(props);
    }
    render() {
        return <li>{this.props.item.title}</li>;
  }
}

export default BookItem;
