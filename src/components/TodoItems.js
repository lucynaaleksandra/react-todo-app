import React from 'react';
import './todoItems.scss';

export default class TodoItems extends React.Component {
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  createTasks = (item) => {
    console.log("item", item)

    return (
      <li className="todo__inner-container" key={item.key}>
        <input type="checkbox" className="todo__checkbox" onChange={this.handleInputChange} />
        <div className="todo__item">{item.text}</div>
        <span className="material-icons" key={item.key} onClick={() => this.delete(item.key)}>delete_outline</span>
      </li>
    )
  }

  delete = (key) => {
    this.props.delete(key)
  }


  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="todo__todos-container">
        {listItems}
      </ul>
    )
  }
}