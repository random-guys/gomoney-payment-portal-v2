<template>
  <div class="tw-w-full page-animate">
    <h3
      class="tw-text-center tw-capitalize tw-text-xl tw-font-semibold tw-mb-6"
    >
      &#8358;{{ amountToPay.toLocaleString() }} Has been successfully redeemed
      to {{ transactionDetails.bankName }}
    </h3>
    <form>
      <div class="tw-bg-gray-lightest tw-rounded-lg tw-mt-16">
        <div class="tw-text-center tw-rounded-lg">
          <div class="tw-p-8">
            <p class="tw-text-sm tw-text-gray">Account Name</p>
            <h3 class="tw-text-xl tw-font-medium tw-capitalize">
              {{ transactionDetails.userName }}
            </h3>
          </div>
        </div>
        <div class="tw-bg-blue-light tw-text-center tw-rounded-lg">
          <div class="tw-p-3">
            <p class="tw-text-sm tw-text-gray">Account Number</p>
            <h3 class="tw-text-xl tw-font-semibold tw-capitalize">
              {{ transactionDetails.accountNo }}
            </h3>
            <p class="tw-text-sm tw-text-gray tw-mt-4">Transaction ID</p>
            <h3
              class="tw-flex tw-justify-center tw-items-center tw-text-xl tw-font-medium tw-text-blue"
            >
              <span class="transaction-id" ref="transactionId">{{
                transactionDetails.transactionId
              }}</span>
              <button @click="copyToClipboard" class="tw-ml-1.5">
                <img src="@/assets/img/copy.svg" alt="gomoney" />
              </button>
            </h3>
            <p class="tw-text-sm tw-text-gray">
              <button @click="copyToClipboard">{{ copyText }}</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormBtn from '~/components/FormBtn.vue'

export default {
  data() {
    return {
      copyText: 'Click To Copy',
      amountToPay: 10000,
    }
  },
  computed: {
    ...mapState(['transactionDetails']),
  },
  beforeMount() {
    console.log(this.$route)
    const details = JSON.parse(
      window.sessionStorage.getItem('transactionDetails')
    )
    this.$store.commit('SET_TRANSACTION_DETAILS', details)
  },

  methods: {
    copyToClipboard(e) {
      e.preventDefault()
      try {
        const account = this.$refs.transactionId.innerText
        navigator.clipboard.writeText(account)
        this.copyText = 'Copied!'
      } catch (err) {
        this.copyText = 'Unable to copy'
      } finally {
        setTimeout(() => (this.copyText = ''), 3000)
      }
    },
  },
  components: { FormBtn },
}
</script>

<style lang="scss" scoped>
.transaction-id {
  display: inline-block;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
