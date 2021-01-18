import React, { Component } from 'react';
import Input from './input/input';
import List from './list/list';
import './main.css';

class Main extends Component {
  state = {
    todos : []
  }

  add = todo => {
    const todos = [...this.state.todos, {id : Date.now(), todo}]
    this.setState(todos);
    console.log(`main ${todos}`);
    console.log({todo});
  }

  plus = () => {
    console.log('plus');
  }

  minus = () => {
    console.log('minus');
  }

  delete = () => {
    console.log('del');
  }

  render() {
    return (
      <main>
        <Input add={this.add}/>
        <List 
          plus={this.plus}
          minus={this.minus}
          delete={this.delete}
        />
      </main>
    );
  }
}

export default Main;