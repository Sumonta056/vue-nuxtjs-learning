<template>
  <div class="child-component">
    <h2>Child Component</h2>
    <p>This component receives data from its parent via props.</p>
    
    <div class="props-display">
      <div class="prop-item">
        <strong>Message:</strong> {{ message }}
      </div>
      <div class="prop-item">
        <strong>Count:</strong> {{ count }}
      </div>
      <div class="prop-item">
        <strong>Is Active:</strong> {{ isActive ? 'Yes' : 'No' }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.child-component {
  padding: 1.5rem;
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
  border-radius: 8px;
  margin-top: 1rem;
}

.props-display {
  margin-top: 1rem;
}

.prop-item {
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: white;
  border-radius: 4px;
}
</style>

