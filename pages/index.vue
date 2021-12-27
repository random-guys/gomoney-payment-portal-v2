<template>
  <div class="container">
    <GomoneyLogo />
    <SendAccountNumber @pay="pay" />
  </div>
</template>

<script>
export default {
  components: {
    SendAccountNumber: () =>
      import('@/components/views/send/send-account-number.vue'),
    GomoneyLogo: () => import('@/components/layout/gomoney-logo.vue'),
  },

  methods: {
    pay() {
      this.$router.push('/send-money')
    },
  },
  // mounted() {
  //   this.$router.push('/redeem-payment')
  // },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
