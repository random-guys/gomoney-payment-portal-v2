<template>
  <section class="container redeem">
    <app-gomoney-logo class="app-logo" />

    <app-redeem-funds-passcode
      v-if="showRedeemPasscode"
      @passcode="displayBankSelect"
    />

    <app-redeem-bank-select
      v-if="showRedeemBankSelect"
      @gomoney="displayAccountInputGomoney"
      @others="displayOtherBankInput"
    />

    <app-redeem-account-input v-if="showRedeemAccountInput" @pay="pay" />

    <app-redeem-other-account v-if="showRedeemOtherAccount" @pay="pay" />
  </section>
</template>

<script>
import GomoneyLogo from '@/components/layout/gomoney-logo.vue'
import RedeemFundsPasscode from '@/components/views/redeem-funds-passcode.vue'
import RedeemBankSelect from '@/components/views/redeem-bank-select.vue'
import RedeemAccountInput from '@/components/views/redeem-account-input.vue'
import RedeemOtherAccount from '@/components/views/redeem-other-account.vue'

export default {
  components: {
    'app-gomoney-logo': GomoneyLogo,
    'app-redeem-funds-passcode': RedeemFundsPasscode,
    'app-redeem-bank-select': RedeemBankSelect,
    'app-redeem-account-input': RedeemAccountInput,
    'app-redeem-other-account': RedeemOtherAccount,
  },
  data() {
    return {
      showRedeemPasscode: true,
      showRedeemBankSelect: false,
      showRedeemAccountInput: false,
      showRedeemOtherAccount: false,
    }
  },
  methods: {
    displayBankSelect() {
      this.showRedeemPasscode = this.showRedeemAccountInput = this.showRedeemOtherAccount = false
      this.showRedeemBankSelect = true
    },
    displayAccountInputGomoney() {
      this.showRedeemPasscode = this.showRedeemBankSelect = this.showRedeemOtherAccount = false
      this.showRedeemAccountInput = true
    },
    displayOtherBankInput() {
      this.showRedeemPasscode = this.showRedeemAccountInput = this.showRedeemBankSelect = false
      this.showRedeemOtherAccount = true
    },

    pay() {
      this.$router.push('/successful')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';

.app-logo {
  margin-top: 3rem;
}

.redeem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
