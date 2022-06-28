<template>
  <main class="redeem-other page-animate">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">&#8358;5000,000.00</p>
      <small class="text--light"> For: Chop Life Small </small>
    </div>

    <form class="form" @submit.prevent="redeem">
      <p class="form__title tw-capitalize">
        Enter your bank name and account number
      </p>
      <div class="bank">
        <FloatingInput
          v-model="bank"
          :select="true"
          :disabled="!bankList.length"
          placeholder="Bank Name"
        />
      </div>
      <FloatingInput
        type="tel"
        v-model="accountNo"
        placeholder="Account no"
        :limit="10"
      />
      <FloatingInput
        type="text"
        v-model="accountName"
        placeholder="Account Name (Auto-filled)"
        :disabled="true"
      />
      <div class="form__btn-wrapper">
        <div
          class="tw-absolute tw--top-7 tw-text-center tw-w-full tw-text-red-400"
        >
          {{ error }}
        </div>
        <FormBtn type="submit" :disabled="disableBtn">
          <Spinner v-if="loading" height="15px" />
          <template v-else>
            {{ disableBtn ? 'Verify' : 'Redeem' }}
            <template v-if="accountName.length"
              >&#8358;50,000</template
            ></template
          ></FormBtn
        >
      </div>
    </form>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { externalBankUserDetails, redeemToOther } from '~/utils/api'

export default {
  data() {
    return {
      accountNo: '',
      data: {},
      bank: '',
      bankCode: '',
      loading: false,
      error: '',
      disableBtn: true,
      accountName: '',
    }
  },
  computed: {
    ...mapState(['bankList', 'transactionDetails', 'link']),

    userName() {
      return this.data?.account_name?.split(' ').slice(0, 2).join(' ')
    },
    sessionId() {
      return this.data?.session_id
    },
    bvn() {
      return this.data?.bvn
    },
    kycLevel() {
      return this.data?.kyc_level
    },
  },

  watch: {
    async accountNo(newVal, prevVal) {
      if (prevVal.length > newVal.length) {
        this.disableBtn = true
        this.data = {}
        this.accountName = ''
        return
      }
      if (this.accountNo.length !== 10 || !this.bank) return

      const bank = [...this.bankList].filter(
        (bank) => bank.Bankname === this.bank
      )

      try {
        this.loading = true
        const { data } = await externalBankUserDetails({
          destination_bank_code: bank[0].bankcode,
          account_number: this.accountNo,
        })
        if (data.status === 'success') {
          this.data = data
          this.accountName = this.data.account_name
        } else {
          this.accountNo = ''
          throw new Error('Account not Found')
        }
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
        if (this.accountName) {
          this.disableBtn = false
        }
        setTimeout(() => (this.error = ''), 3000)
      }
    },
    bank() {
      this.accountNo = ''
    },
  },

  methods: {
    async redeem() {
      if (this.accountNo.length < 10 || !this.userName || !this.bvn) return

      this.loading = true
      this.disableBtn = false

      const bank = [...this.bankList].filter(
        (bank) => bank.Bankname === this.bank
      )

      const apiBody = {
        link: this.link,
        destination_bank_code: bank[0].bankcode,
        destination_account_number: this.accountNo,
        passcode: '000000',
      }

      try {
        const { data } = await redeemToOther(apiBody)

        this.$store.commit('SET_TRANSACTION_DETAILS', {
          transactionId: data.data.transaction_id,
          accountNo: this.accountNo,
          bankName: this.bank,
          userName: this.userName,
        })
        window.sessionStorage.setItem(
          'transactionDetails',
          JSON.stringify(this.transactionDetails)
        )
        this.$router.push('/payment/redeem-successful')
      } catch (err) {
        console.log(err)
        this.error = 'An error Occurred'
      } finally {
        this.loading = false
        setTimeout(() => {
          this.error = ''
          this.disableBtn = false
        }, 3000)
      }
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

  .bank {
    margin: 20px 0 10px 0;
  }

  &__btn-wrapper {
    margin-top: 2rem;
    position: relative;
  }
}
</style>
