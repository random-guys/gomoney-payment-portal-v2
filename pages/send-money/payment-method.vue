<template>
  <div class="container">
    <GomoneyLogo />
    <merchant-bank-option />
  </div>
</template>

<script>
export default {
  components: {
    GomoneyLogo: () => import('@/components/layout/gomoney-logo.vue'),
    MerchantBankOption: () =>
      import('~/components/views/merchant/merchant-bank-option.vue'),
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
