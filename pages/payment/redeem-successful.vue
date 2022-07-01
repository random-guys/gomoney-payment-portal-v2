<template>
  <div class="tw-w-full page-animate">
    <h3
      class="tw-text-center tw-capitalize tw-text-xl tw-font-semibold tw-mb-6"
    >
      <template v-if="transactionDetails.transactionId.length > 1">
        &#8358;{{ amount.toLocaleString() }} redeemed to
        {{ transactionDetails.bankName }}
      </template>
      <template v-else>
        &#8358;{{ amount.toLocaleString() }} has been sent to your new
        {{ transactionDetails.bankName }} account
      </template>
    </h3>

    <form>
      <div class="tw-bg-gray-lightest tw-rounded-lg tw-mt-8">
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
            <template v-if="transactionDetails.transactionId.length > 1">
              <p class="tw-text-sm tw-text-gray">Account Number</p>
              <h3 class="tw-text-xl tw-font-semibold tw-capitalize">
                {{ transactionDetails.accountNo }}
              </h3>
              <p class="tw-text-sm tw-text-gray tw-mt-4">Transaction ID</p>
            </template>
            <template v-else>
              <p class="tw-text-sm tw-text-gray">Phone Number</p>
              <h3 class="tw-text-xl tw-font-semibold tw-capitalize">
                {{ transactionDetails.phoneNo }}
              </h3>
              <p class="tw-text-sm tw-text-gray tw-mt-4">Account Number</p>
            </template>

            <h3
              class="tw-flex tw-justify-center tw-items-center tw-text-xl tw-font-medium tw-text-blue"
            >
              <span class="transaction-id" ref="transactionId">{{
                transactionDetails.transactionId || transactionDetails.accountNo
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
    <template v-if="!transactionDetails.transactionId">
      <QrCode />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import FormBtn from '~/components/FormBtn.vue'
import QrCode from '~/components/qr-code.vue'

export default {
  components: { FormBtn, QrCode },
  data() {
    return {
      copyText: 'Click To Copy',
    }
  },
  computed: {
    ...mapState(['transactionDetails']),
    ...mapGetters(['amount']),
  },
  beforeMount() {
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
