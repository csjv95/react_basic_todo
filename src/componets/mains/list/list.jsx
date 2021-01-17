import React, { Component } from 'react';
import './list.css';

class List extends Component {
  state = {
    count : 0
  }

  plus = ()=> {
    const count = this.state.count + 1;
    this.setState({count});
  }

  minus = ()=> {
    const count = this.state.count;
    this.setState({count: count > 0 ? count -1 : 0})
  }

  delte = ()=> {

  }
  
  render() {
    return(
      <ul className='list'>
        <li>
          <span className='list_item' ></span>
          <span className='list_count'>{this.state.count}</span>
          <button className='list_btn' onClick={this.plus}>
            <i className="fas fa-plus"></i>
          </button>
          <button className='list_btn' onClick={this.minus}>
            <i className="fas fa-minus"></i>
          </button>
          <button className='list_btn' onClick={this.delte}>
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    );
  }
}

export default List;