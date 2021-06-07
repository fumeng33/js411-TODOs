import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './Listcomponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    //state initialization 
    this.state = {
      input: '',
      todos: [],
      isclicked: false
    };
  }

  updateInput = (event) => {
    this.setState({
    input: event.target.value
    });
  }

  formSubmitTodo = (event) => {
    event.prevenDefault()
    this.setState({
      todo: [...this.state.todo, this.state.input],
      input: ''
    })
  }

  //FIRST: create a method that deletes an item from state using the method setState()
  //Pass delete method as props 
  deleteTodo = (i) => {
    const arrayOfTodos = this.state.todo
    arrayOfTodos.splice(i, 1)
    this.setState({
    todo: {...arrayOfTodos}
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            TODO LIST
          </p>
          <form>
            <input id ="todoInput" value={this.state.input} onChange={this.updateInput}/>
            <button onClick={this.formSubmitTodo}>add todo</button>
          </form>
          <ListComponent items={this.state.todo} deleteTodo={(i) => this.deleteTodo(i)}/>
        </header>
      </div>
    )
  }
}



