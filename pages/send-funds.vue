<template>
  <section class="container send">
    <app-gomoney-logo class="app-logo" />

    <app-send-account-number v-if="showEnterRecipient" />

    <app-send-recipient-details v-if="showRecipientDetails" />
  </section>
</template>

<script>
import GomoneyLogo from '@/components/layout/gomoney-logo.vue'
import SendAccountNumber from '@/components/views/send/send-account-number.vue'
import SendRecipientDetails from '@/components/views/send/send-recipient-details.vue'

export default {
  components: {
    'app-gomoney-logo': GomoneyLogo,
    'app-send-account-number': SendAccountNumber,
    'app-send-recipient-details': SendRecipientDetails,
  },
  data() {
    return {
      showEnterRecipient: false,
      showRecipientDetails: true,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';

.app-logo {
  margin-top: 3rem;
}

.send {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
