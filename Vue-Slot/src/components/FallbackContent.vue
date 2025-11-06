<!--
  FALLBACK CONTENT Example
  
  Slots can have default content that shows when no content is provided.
  This is called "fallback content".
  
  Usage:
  <Button>Custom text</Button>  -> Shows "Custom text"
  <Button></Button>              -> Shows "Click me" (fallback)
-->
<template>
  <div class="border-2 border-orange-500 rounded-lg p-4 bg-orange-50">
    <h3 class="text-lg font-semibold text-orange-800 mb-2">
      Fallback Content Example
    </h3>
    <button
      class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
    >
      <!-- Fallback content - shows if no content provided -->
      <slot>Click me!</slot>
    </button>
  </div>
</template>

<style scoped></style>






