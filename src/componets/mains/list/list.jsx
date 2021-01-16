import React, { Component } from 'react';
import './list.css';

class List extends Component {
  state ={
    count : 0
  }

  plus = ()=> {
    this.setState({count : this.state.count + 1});
  }

  minus = ()=> {
    const count = this.state.count;
    this.setState({count: count > 0 ? count -1 : 0})
  }

  render() {
    return(
      <ul className='list'>
        <li>
          <span className='list_item'>Work</span>
          <span className='list_count'>{this.state.count}</span>
          <button className='list_btn' onClick={this.plus}>
            <i className="fas fa-plus"></i>
          </button>
          <button className='list_btn' onClick={this.minus}>
            <i className="fas fa-minus"></i>
          </button>
        </li>
      </ul>
    );
  }
}

export default List;