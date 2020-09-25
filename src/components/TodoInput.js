import React from 'react';
import { TextField } from '@material-ui/core';
import './todoInput.scss';

const TodoInput = () => {
  return (
    <div className="todo__input-container">
      <TextField label="Add todo"
        margin="normal"
        className="todo__input">
      </TextField>
      <span className="material-icons">add_circle_outline</span>
    </div>
  )
}

export default TodoInput