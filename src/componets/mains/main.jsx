import React, { Component } from 'react';
import Input from './input/input';
import List from './list/list';
import './main.css';

class Main extends Component {
  state = {
    todo : []
  }

  add = (todo) => {
    const todos = [...this.state.todo, {id : Date.now(), todo}]
    this.setState(todos);
  }

  render() {
    return (
      <main>
        <Input add={this.add}/>
        <List />
      </main>
    );
  }
}

export default Main;