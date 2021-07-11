import { observable } from "mobx";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}

const todo = new Todo();

console.log(todo);
