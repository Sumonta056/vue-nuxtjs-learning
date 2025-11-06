<!--
  NAMED SLOTS Example
  
  Named slots allow you to have multiple slots in one component.
  Each slot has a name attribute.
  
  Usage:
  <Card>
    <template #header>Header Content</template>
    <template #body>Body Content</template>
    <template #footer>Footer Content</template>
  </Card>
-->
<template>
  <div class="border-2 border-green-500 rounded-lg overflow-hidden">
    <!-- Named slot: header -->
    <div class="bg-green-500 text-white px-4 py-2">
      <slot name="header">Default Header</slot>
    </div>

    <!-- Named slot: body -->
    <div class="p-4 bg-green-50">
      <slot name="body">Default Body Content</slot>
    </div>

    <!-- Named slot: footer -->
    <div class="bg-green-100 px-4 py-2 text-sm text-gray-700">
      <slot name="footer">Default Footer</slot>
    </div>
  </div>
</template>

<style scoped></style>





