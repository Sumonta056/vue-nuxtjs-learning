import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todolist", {
  state: () => ({
    todoList: [],
    id: 0,
  }),

  actions: {
    addTodo(item) {
      this.todoList.push({ item: item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toggleCompleted(itemId) {
      const todo = this.todoList.find((object) => object.id === itemId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

