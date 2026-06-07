<script setup>
const myMessage = 'This is my component!'
const myNumber = 5
const onClickMessage = 'Click me!'

function onClick() {
  alert('You clicked me!')
}
</script>

<template>
  <div>
    <h1>{{ myMessage }} {{ myNumber }}</h1>
    <button @click="onClick">{{ onClickMessage }}</button>
  </div>
</template>
