import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  inputRef = React.createRef();

  submit= (event)=> {
    event.preventDefault();
    const todo = this.inputRef.current.value;
    todo && console.log(todo);
 }

  render() {
    return (
      <form className='input_container' onSubmit={this.submit}> 
        <input ref={this.inputRef} className='input' type="text" placeholder='What your plan today?' />
        <button className='input_btn'>
          <i className="fas fa-plus-circle"></i>
        </button>
      </form>
    );
  }
} 
   

export default Input;
