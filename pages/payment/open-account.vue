<template>
  <main class="open-account page-animate">
    <div class="text">
      <p class="text--semibold">Open A Gomoney Account</p>
    </div>

    <form class="form" @submit.prevent="signUp">
      <FloatingInput
        class="input-field"
        type="text"
        v-model="firstName"
        placeholder="First Name"
      />
      <FloatingInput
        class="input-field"
        type="text"
        v-model="lastName"
        placeholder="Last Name"
      />
      <FloatingInput
        class="input-field"
        type="tel"
        v-model="phoneNumber"
        placeholder="Phone Number"
      />
      <FloatingInput
        class="input-field"
        type="password"
        v-model="passcode"
        placeholder="Four-digit Passcode"
      />
      <FloatingInput
        class="input-field"
        type="password"
        v-model="passcodeCheck"
        placeholder="Retype Four-digit Passcode"
      />
      <div class="form__submit tw-relative">
        <div
          class="tw-absolute tw--top-2 tw-text-center tw-w-full tw-text-red-400"
        >
          {{ error }}
        </div>
        <FormBtn :disabled="!formFilled">
          <Spinner v-if="loading" height="15px" />
          <template v-else> Sign Up</template>
        </FormBtn>
      </div>
    </form>
  </main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import FormBtn from '~/components/FormBtn.vue'
import { createUser, userProfile } from '~/utils/api'

export default {
  components: { FormBtn },
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      passcode: '',
      passcodeCheck: '',
      error: '',
      loading: false,
    }
  },
  computed: {
    ...mapState(['link', 'transactionDetails']),
    ...mapGetters(['senderPhoneNo', 'amount']),
    formFilled() {
      return (
        this.firstName &&
        this.lastName &&
        this.phoneNumber &&
        this.passcode &&
        this.passcodeCheck &&
        true
      )
    },
  },
  methods: {
    async signUp() {
      if (!this.formFilled) return

      const isFirstNameLetters = this.firstName.match(/^[A-Za-z]+$/)
      const isLastNameLetters = this.lastName.match(/^[A-Za-z]+$/)

      this.loading = true

      try {
        if (!isFirstNameLetters || !isLastNameLetters) {
          throw new Error('Name Should Contain only Letters')
        }

        if (this.passcode.length > 4 || this.passcode.length < 4) {
          throw new Error('Passcode Should Be Four Digits')
        }

        if (this.passcode !== this.passcodeCheck) {
          throw new Error('Passcode Do Not Match')
        }

        const userDetails = {
          link: this.link,
          referrer: this.senderPhoneNo,
          amount: this.amount,
          from_website: true,
          phone_number: this.phoneNumber,
          first_name: this.firstName,
          last_name: this.lastName,
          password: this.passcode,
        }

        const req = await Promise.allSettled([
          userProfile(this.phoneNumber),
          createUser(userDetails),
        ])
        this.loading = false
        if (req[0].status === 'fulfilled') {
          throw new Error('User Already Exist')
        }
        console.log(req[1])
        if (req[1].status === 'rejected') {
          throw new Error('An Error Occurred')
        }

        const data = req[1].value.data.data

        this.$store.commit('SET_TRANSACTION_DETAILS', {
          transactionId: '',
          phoneNo: 0 + data.user.phone_meta.local_number,
          accountNo: data.wallet.account.account_number,
          bankName: data.user.channel,
          userName: data.user.first_name + ' ' + data.user.last_name,
        })

        window.sessionStorage.setItem(
          'transactionDetails',
          JSON.stringify(this.transactionDetails)
        )
        this.$router.push('/payment/redeem-successful')
      } catch (err) {
        this.error = err.message
        setTimeout(() => (this.error = ''), 3000)
      } finally {
        this.loading = false
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
  margin-top: 50px;

  &__title {
    margin-bottom: 20px;
  }
  .input-field {
    margin: 15px 0;
  }

  &__submit {
    padding-top: 20px;
  }
}
</style>
