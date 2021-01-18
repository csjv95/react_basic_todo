import React, { Component } from 'react';
import './list.css';

class List extends Component {
  plus = ()=> {
    this.props.plus();
  }

  minus = ()=> {
    this.props.minus();
  }

  delete = ()=> {
    this.props.delete();
  }

  add = todo => {
    const todos = this.props.add(todo);
    console.log(`list${todos}`);
  }

  render() {
    return(
      <ul className='list'>
        <li>
          <span className='list_item'>work</span>
          <span className='list_count'></span>
          <button className='list_btn' onClick={this.plus}>
            <i className="fas fa-plus"></i>
          </button>
          <button className='list_btn' onClick={this.minus}>
            <i className="fas fa-minus"></i>
          </button>
          <button className='list_btn' onClick={this.delete}>
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    );
  }
}

export default List;