import { observable, computed } from "mobx";

export class Todo {
  id: number = Math.random();
  @observable title?: string = "";
  @observable finished?: boolean = false;
}

export class TodoList {
  @observable todos: Todo[] = [];
  @computed get unfinishedTodoCount(): number {
    return this.todos.filter(todo => !todo.finished).length;
  }
}
