import React from 'react';
import './App.scss';
import TodoList from './TodoList';
// import NewTodo from './NewTodo';

class App extends React.Component {
  state = {
    userInput: "",
    list: []
  }

  render() {
    return (
      <div className="todo__app">
        <h1>Daily To Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
