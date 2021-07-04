import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";

import { Todo, TodoList } from "./app.ts";

@observer
class TodoListView extends Component<{ todoList: TodoList }> {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

@observer
class TodoView extends Component<{ todo: Todo }> {
  constructor(props) {
    super(props);
  }
  handleChange() {
    this.props.todo.finished = !this.props.todo.finished;
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.finished}
          onChange={this.handleChange.bind(this)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

const store = new TodoList();
store.todos = [
  {
    id: 0,
    title: "0",
    finished: false
  },
  {
    id: 1,
    title: "1",
    finished: false
  }
];
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById("app"));
