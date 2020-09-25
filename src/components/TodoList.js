import React from 'react'
import TodoItems from './TodoItems';
// import { TextField } from '@material-ui/core';
import './todoList.scss';

export default class TodoList extends React.Component {
  state = {
    items: [],
  };

  addItem = (e) => {
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        }
      })

      this._inputElement.value = ""
    }

    e.preventDefault()
    console.log(this.state.items)
  }

  deleteItem = (key) => {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    const { items } = this.state

    return (
      <div className="form__container">
        <form onSubmit={this.addItem} className="todo__input-container">
          <input type="text"
            ref={(input) => this._inputElement = input}
            className="todo__input"
            placeholder="Add new todo" />
          <span className="material-icons" onClick={this.addItem}>add_circle_outline</span>
        </form>

        {
          items !== ""
            ? <TodoItems key={items.key} entries={items} delete={this.deleteItem} />
            : null
        }
      </div>
    )
  }
}

/* <TextField label="Add todo"
  ref={(a) => this._inputElement = a}
  margin="normal"
  className="todo__input">
</TextField> */
