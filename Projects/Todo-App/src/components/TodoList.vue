<!-- This is a component for the todo list -->
<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted,deleteTodo } = store;
</script>

<template>
  <section class="todo-list-container">
    <h2 class="todo-list-title">Todo List</h2>
    <ul v-if="todoList.length > 0" class="todo-list">
      <li v-for="todo in todoList" :key="todo.id" class="todo-list-item">
        <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
        <span @click.stop="toggleCompleted(todo.id)">&#10004</span>
        <button @click="deleteTodo(todo.id)"> Delete</button>
      </li>
    </ul>
    <p v-else class="empty-message">No todos found. Please add some!</p>
  </section>
</template>

<style scoped>
.todo-list-container {
  max-width: 420px;
  margin: 2rem auto;
  background: #fafcff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(60, 60, 60, 0.06);
  padding: 2rem 1.5rem;
}

.todo-list-title {
  text-align: center;
  font-size: 1.5rem;
  color: #0077ff;
  margin-bottom: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: black;
}

.todo-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f7fa;
  margin-bottom: 0.75em;
  border-radius: 8px;
  padding: 0.8em 1em;
  font-size: 1.07rem;
  transition: background 0.18s;
}

.todo-list-item.completed span {
  text-decoration: line-through;
  color: #b1b1b1;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff4b4b;
  font-size: 1.2em;
  cursor: pointer;
  padding: 0.35em 0.7em;
  border-radius: 6px;
  transition: background 0.18s;
}

.delete-btn:hover {
  background: #fff2f2;
}

.empty-message {
  text-align: center;
  color: #909090;
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.completed {
  text-decoration: line-through;
  color: #b1b1b1;
}
</style>
