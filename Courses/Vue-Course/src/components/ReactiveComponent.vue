<script setup>
import { reactive } from 'vue'

let initalState = reactive({ count: 0 })
let objecState = reactive({ user: ['John', 'Doe'], value: { count: 29 } })

const changeUser = () => {
  objecState.user[0] = 'Jane'
  objecState.user[1] = 'Smith'
}

const addUser = () => {
  objecState.user.push('NewUser')
}
</script>

<template>
  <div>
    <h2>Reactive Component {{ initalState.count }}</h2>
    <button @click="initalState.count++">+</button>
    <!--  -->
    <h1>Counter : {{ objecState.value.count }}</h1>
    <button @click="objecState.value.count += 10">Add 10</button>
    <button @click="changeUser">Change User</button>
    <button @click="addUser">Add User</button>
    <h3>User: {{ objecState.user }}</h3>
  </div>
</template>
