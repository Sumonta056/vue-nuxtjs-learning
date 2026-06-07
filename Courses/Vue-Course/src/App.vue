<script setup>
import AttributeBinding from './components/AttributeBinding.vue'
import EventHandler from './components/EventHandler.vue'
import FormEventHandler from './components/FormEventHandler.vue'
import HelloWorld from './components/HelloWorld.vue'
import OnMounted from './components/OnMounted.vue'
import ReactiveComponent from './components/ReactiveComponent.vue'
import RefComponent from './components/RefComponent.vue'
import TextInterpolation from './components/TextInterpolation.vue'
import VBind from './components/VBind.vue'
import VComputed from './components/VComputed.vue'
import VDirectiveTaskManager from './components/VDirectiveTaskManager.vue'
import VFor from './components/VFor.vue'
import VIf from './components/VIf.vue'
</script>

<template>
  <TextInterpolation />
  <AttributeBinding />
  <HelloWorld />
  <EventHandler />
  <FormEventHandler />
  <ReactiveComponent />
  <RefComponent />
  <VFor />
  <VBind />
  <VIf />
  <VComputed />
  <OnMounted />

  <VDirectiveTaskManager />
</template>

<style scoped></style>
