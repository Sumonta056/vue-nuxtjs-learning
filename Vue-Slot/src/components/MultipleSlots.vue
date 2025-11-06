<!--
  MULTIPLE SLOTS WITH FALLBACK Example
  
  This component demonstrates:
  - Multiple named slots
  - Default slot (unnamed)
  - Fallback content for each slot
-->
<template>
  <div class="border-2 border-indigo-500 rounded-lg overflow-hidden">
    <!-- Named slot with fallback -->
    <header class="bg-indigo-500 text-white px-4 py-3">
      <slot name="header">
        <span class="text-sm opacity-75">Default Header</span>
      </slot>
    </header>

    <!-- Default slot (unnamed) with fallback -->
    <main class="p-4 bg-indigo-50 min-h-[100px]">
      <slot>
        <p class="text-gray-500 italic">No content provided</p>
      </slot>
    </main>

    <!-- Named slot with fallback -->
    <footer class="bg-indigo-100 px-4 py-2 text-sm text-gray-700">
      <slot name="footer">
        <span class="text-xs opacity-75">Default Footer</span>
      </slot>
    </footer>
  </div>
</template>

<style scoped></style>





