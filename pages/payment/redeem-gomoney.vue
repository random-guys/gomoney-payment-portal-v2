<template>
  <main class="redeem-gomoney page-animate">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">
        &#8358;{{ (amount / 100).toFixed(2) }}
      </p>
      <small class="text--light"> For: Chop Life Small </small>
    </div>

    <form class="form" @submit.prevent="redeemToAccount">
      <p class="form__title" for="">Enter your gomoney account number</p>

      <FloatingInput
        type="tel"
        v-model="number"
        placeholder="Account no/ phone no"
      />
      <FloatingInput
        type="text"
        v-model="accountName"
        placeholder="Account Name (Auto-filled)"
        :disabled="true"
      />
      <div class="form__submit tw-relative">
        <div
          class="tw-absolute tw--top-2 tw-text-center tw-w-full tw-text-red-400"
        >
          {{ error }}
        </div>
        <FormBtn :disabled="loading || disable">
          <Spinner v-if="loading" height="15px" />
          <template v-else>
            {{ btnText }}
            <!-- {{ accountName.length ? 'Redeem' : 'Verify' }}
            <template v-if="accountName.length">
              &#8358;{{ (amount / 100).toFixed(2) }}</template> -->
          </template>
        </FormBtn>
      </div>
    </form>
  </main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { getGomoneyAccDetails, redeemToOther } from '~/utils/api'
export default {
  data() {
    return {
      number: '',
      data: {},
      loading: false,
      error: '',
      disable: true,
      accountName: '',
      btnText: 'Verify',
      accountNo: '',
    }
  },

  computed: {
    ...mapState(['link', 'passcode', 'transactionDetails']),
    ...mapGetters(['amount']),
    name() {
      return (
        Object.keys(this.data).length &&
        this.data.first_name.toUpperCase() +
          ' ' +
          this.data.last_name.toUpperCase()
      )
    },
  },

  watch: {
    number(newVal, oldVal) {
      if (newVal.length < oldVal.length) {
        this.data = {}
        this.btnText = 'Verify'
        this.accountName = ''
        this.disable = true
      }
      if (newVal.length > 9) {
        this.disable = false
      }
    },
  },

  methods: {
    async redeemToAccount() {
      if (this.number.length < 10) return
      this.loading = this.disable = true
      if (!this.name) {
        try {
          const { data } = await getGomoneyAccDetails(this.number)
          this.data = data.data
          this.accountName = `${this.data.first_name.toUpperCase()} ${this.data.last_name.toUpperCase()}`
          this.accountNo = this.data.account_number

          this.disable = false
          this.btnText = `Redeem ₦${(this.amount / 100).toFixed(2)}`
        } catch (err) {
          this.error = 'Unable to Find Account at This Time'
        }
      } else {
        try {
          const apiBody = {
            link: this.link,
            destination_bank_code: '100022',
            destination_account_number: this.accountNo,
            passcode: this.passcode,
          }
          const { data } = await redeemToOther(apiBody)

          this.$store.commit('SET_TRANSACTION_DETAILS', {
            transactionId: data.data.transaction_id,
            accountNo: this.accountNo,
            bankName: 'Gomoney',
            userName: this.accountName,
          })
          window.sessionStorage.setItem(
            'transactionDetails',
            JSON.stringify(this.transactionDetails)
          )
          this.$router.push('/payment/redeem-successful')
        } catch (err) {
          this.error = 'Cannot Redeem Money! Try Again'
        }
      }
      this.loading = false
      setTimeout(() => {
        this.error = ''
        this.disable = false
        if (this.number.length < 10) this.disable = true
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.text {
  &--semibold {
    margin-top: 10px;
  }
}

.form {
  margin-top: 30px;

  &__title {
    margin-bottom: 20px;
  }
  &__submit {
    padding-top: 20px;
  }
}
</style>
