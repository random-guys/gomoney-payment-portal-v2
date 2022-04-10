<template>
  <div id="index-page">
    <component :is="currentComponent" :key="currentComponent" />
  </div>
</template>

<script>
import passcode from '~/pages/payment/passcode.vue'
// import billinginfo from '~/pages/payment/billinginfo.vue'
// import paymentmethod from '~/pages/payment/paymentmethod.vue'
// import disposableaccount from '~/pages/payment/disposableaccount.vue'
// import confirmation from '~/pages/payment/confirmation.vue'

export default {
  name: 'IndexPage',

  components: {
    passcode,
    // billinginfo,
    // paymentmethod,
    // disposableaccount,
    // confirmation,
  },

  data() {
    return {
      currentComponent: 'passcode',
    }
  },

  created() {
    this.setComponent(this.$route.name)
  },
  methods: {
    setComponent(route) {
      switch (route) {
        case 'payment-passcode':
          this.currentComponent = 'passcode'
          break
        // case 'payment-billinginfo':
        //   this.currentComponent = 'billinginfo'
        //   break
        // case 'payment-paymentmethod':
        //   this.currentComponent = 'paymentmethod'
        //   break
        // case 'payment-disposableaccount':
        //   this.currentComponent = 'disposableaccount'
        //   break
        // case 'payment-confirmation':
        //   this.currentComponent = 'confirmation'
        //   break

        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
