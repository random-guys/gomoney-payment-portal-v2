<template>
  <main class="passcode">
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
          <template v-else> Sign Up </template>
        </FormBtn>
      </div>
    </form>
  </main>
</template>

<script>
import axios from 'axios'
import FormBtn from '~/components/FormBtn.vue'

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
    signUp() {
      if (!this.formFilled) return
      if (this.passcode.length > 4 || this.passcode.length < 4) {
        this.error = 'Passcode Should Be Four Digits'
        setTimeout(() => (this.error = ''), 3000)
        return
      }
      if (this.passcode !== this.passcodeCheck) {
        this.error = 'Passcode Do Not Match'
        setTimeout(() => (this.error = ''), 3000)
        return
      }
      this.loading = true
      let userExist = axios.get(
        process.env.baseUrl + '/utils/profile/' + this.phoneNumber
      )
      let createAccount = axios.post(process.env.baseUrl + '/user', {
        phone_number: this.phoneNumber,
        first_name: this.firstName,
        last_name: this.lastName,
        password: this.passcode,
      })
      Promise.all([userExist, createAccount])
      userExist
        .then(() => {
          this.loading = false
          this.error = 'User Already Exist'
          setTimeout(() => (this.error = ''), 3000)
        })
        .catch((err) => console.log(err))
      createAccount
        .then(({ data: { data } }) => {
          this.loading = false
          this.$store.commit('SET_USER_DATA', { ...data.user })
          this.$router.push('/payment/transfer-to-new-account')
        })
        .catch((err) => {
          if (this.error) return
          this.error = 'Name Not Supported'
          this.loading = false
        })
      setTimeout(() => (this.error = ''), 3000)
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
