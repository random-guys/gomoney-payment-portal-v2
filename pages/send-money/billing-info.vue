<template>
  <div class="container">
    <BillingInfo />
  </div>
</template>

<script>
export default {
  components: {
    BillingInfo: () => import('@/components/views/send/billing-info.vue'),
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
}
</style>
