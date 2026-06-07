<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')

const submitForm = (e) => {
  e.preventDefault()
  alert(`Form Submitted\nName: ${name.value}\nEmail: ${email.value}`)
}
</script>

<template>
  <form @submit="submitForm" class="form-container">
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" v-model="name" type="text" placeholder="Enter Your Name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Enter Your Email" required />
    </div>
    <button type="submit" class="submit-btn">Submit</button>
  </form>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Arial, sans-serif;
}
h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}
.form-group {
  margin-bottom: 18px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #555;
}
input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s;
}
input:focus {
  border-color: #0078d4;
  outline: none;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #0078d4;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #005fa3;
}
</style>
