<template>
  <section class="container redeem">
    <app-gomoney-logo v-if="showMerchantInfo" class="app-logo" />

    <app-merchant-info v-if="showMerchantInfo" @pay="gotoBankOption" />

    <app-merchant-bank-option
      v-if="showMerchantBankOption"
      @gomoney="payViaGomoney"
      @others="payViaOtherBank"
    />

    <app-merchant-gomoney-pay
      v-if="showGomoneyPayInfo"
      @paid="displayProcessingPage"
    />

    <app-merchant-other-bank
      v-if="showOtherBankPayInfo"
      @paid="displayProcessingPage"
    />

    <app-merchant-payment-processing v-if="showPaymentProcessing" />
  </section>
</template>

<script>
import GomoneyLogo from '@/components/layout/gomoney-logo.vue'
import MerchantInfo from '@/components/views/merchant/merchant-info.vue'
import MerchantBankOption from '@/components/views/merchant/merchant-bank-option.vue'
import MerchantGomoneyPay from '@/components/views/merchant/merchant-gomoney-pay.vue'
import MerchantOtherBank from '@/components/views/merchant/merchant-other-bank.vue'
import MerchantPaymentProcessing from '@/components/views/merchant/merchant-payment-processing.vue'

export default {
  components: {
    'app-gomoney-logo': GomoneyLogo,
    'app-merchant-info': MerchantInfo,
    'app-merchant-bank-option': MerchantBankOption,
    'app-merchant-gomoney-pay': MerchantGomoneyPay,
    'app-merchant-other-bank': MerchantOtherBank,
    'app-merchant-payment-processing': MerchantPaymentProcessing,
  },
  data() {
    return {
      showMerchantInfo: true,
      showMerchantBankOption: false,
      showGomoneyPayInfo: false,
      showOtherBankPayInfo: false,
      showPaymentProcessing: false,
    }
  },
  methods: {
    gotoBankOption() {
      this.showMerchantInfo = false
      this.showMerchantBankOption = true
    },

    payViaGomoney() {
      this.showMerchantInfo = this.showMerchantBankOption = this.showOtherBankPayInfo = false
      this.showGomoneyPayInfo = true
    },

    payViaOtherBank() {
      this.showMerchantInfo = this.showMerchantBankOption = this.showGomoneyPayInfo = false
      this.showOtherBankPayInfo = true
    },

    displayProcessingPage() {
      this.showMerchantInfo = this.showMerchantBankOption = this.showGomoneyPayInfo = this.showOtherBankPayInfo = false
      this.showPaymentProcessing = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';

.app-logo {
  margin-top: 3rem;
}

.merchant {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
