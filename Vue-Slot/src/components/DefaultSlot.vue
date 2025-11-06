<!--
  DEFAULT SLOT Example
  
  The default slot is the most basic slot type.
  Content placed between component tags goes into <slot>
  
  Usage:
  <Card>This content goes into the default slot</Card>
-->
<template>
  <div class="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
    <h3 class="text-lg font-semibold text-blue-800 mb-2">
      Default Slot Example
    </h3>
    <!-- Default slot - content goes here -->
    <slot></slot>
  </div>
</template>

<style scoped></style>





