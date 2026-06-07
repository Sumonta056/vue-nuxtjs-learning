<template>
  <div class="app">
    <h1>📝 My Task Manager</h1>

    <!-- v-model -->
    <input v-model="newTask" type="text" placeholder="Enter a new task" />
    <button @click="addTask">Add Task</button>

    <!-- v-if / v-else -->
    <p v-if="tasks.length === 0" class="empty-msg">No tasks yet. Add your first one!</p>
    <div v-else>
      <!-- v-show -->
      <button @click="showCompleted = !showCompleted">
        {{ showCompleted ? 'Hide' : 'Show' }} Completed Tasks
      </button>

      <!-- v-for -->
      <ul>
        <li
          v-for="task in tasks"
          :key="task.id"
          :class="{ done: task.completed }"
          v-show="showCompleted || !task.completed"
        >
          <input type="checkbox" v-model="task.completed" />
          <!-- v-text -->
          <span v-text="task.title"></span>

          <!-- v-html -->
          <small v-html="task.completed ? '<em>Done!</em>' : '<strong>Pending</strong>'"></small>

          <button @click="removeTask(task.id)">❌</button>
        </li>
      </ul>
    </div>

    <!-- v-bind for dynamic styles -->
    <footer :style="{ color: tasks.length > 0 ? 'green' : 'gray' }">
      Total Tasks: {{ tasks.length }}
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// reactive data
const newTask = ref('')
const showCompleted = ref(true)
const tasks = ref([
  { id: 1, title: 'Learn Vue.js', completed: true },
  { id: 2, title: 'Build something cool', completed: false },
])

// methods
function addTask() {
  if (newTask.value.trim() === '') return
  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
    completed: false,
  })
  newTask.value = ''
}

function removeTask(id) {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<style scoped>
.app {
  width: 350px;
  margin: 40px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
input[type='text'] {
  width: 70%;
  padding: 8px;
  margin-right: 8px;
}
.done {
  text-decoration: line-through;
  color: gray;
}
button {
  margin-top: 10px;
}
.empty-msg {
  color: #888;
}
</style>
