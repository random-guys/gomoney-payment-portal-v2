<template>
  <div class="container"></div>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/redeem-payment')
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
