<template>
  <div class="container">
    <app-floating-input></app-floating-input>
  </div>
</template>

<script>
import FloatingInput from '../components/elements/floating-input.vue'

export default {
  components: {
    'app-floating-input': FloatingInput,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
