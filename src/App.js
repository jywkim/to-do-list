import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Wake up."},
        {id: 1, text: "Be epic."},
        {id: 2, text: "Sleep."}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo added: ", todoText);
  }

  removeTodo(id) {
    console.log("Removing: ", id);
  }

  render() {
    return (
      <div className="App">
        <div className="to-do-wrapper">
          <Header />
          <Input todoText="" addTodo={this.addTodo}/>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <Item todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
