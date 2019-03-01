import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li className="card-body list-group-item d-flex justify-content-between align-items-center"
        onClick={() => this.delete(item.key)}
        key={item.key}>
          {item.text}
        <button class="badge badge-primary badge-pill left">X</button>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div className="card text-white bg-danger">
        <div className="card-header">Estas son tus Tareas Pendientes</div>
        <div className="card-body">
          <ul className="theList">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default TodoItems;