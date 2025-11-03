<!-- This is a component for the todo form -->
<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { ref } from "vue";
const todo = ref("");
const store = useTodoListStore();

const addTodoList = (item) => {
  if (item.length === 0) {
    alert("Please input todolist first!");
    return;
  }
  store.addTodo(item);
  todo.value = "";
};
</script>

<template>
  <form class="todo-form" @submit.prevent="addTodoList(todo)">
    <input
      v-model="todo"
      type="text"
      placeholder="Write your todo list!"
      class="todo-input"
    />
    <button class="create-btn">Create</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-radius: 12px;
  background: #f5f7fa;
  box-shadow: 0 4px 12px rgba(60, 60, 60, 0.09);
  margin: 2rem auto;
  max-width: 420px;
}

.todo-input {
  flex: 1 1 0;
  padding: 0.6rem 1rem;
  border: 1.5px solid #b1b1b1;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
}

.todo-input:focus {
  border-color: #0077ff;
}

.create-btn {
  padding: 0.65em 1.5em;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #0077ff 35%, #65cafb 100%);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 1px 8px rgba(0, 123, 255, 0.11);
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
}

.create-btn:hover,
.create-btn:focus {
  background: linear-gradient(90deg, #005fcc 0%, #0099ff 100%);
  transform: translateY(-2px) scale(1.04);
}
</style>

