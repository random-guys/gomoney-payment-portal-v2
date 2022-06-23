<template>
  <main class="passcode page-animate">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">&#8358;5000,000.00</p>
      <small class="text--light"> For: Chop Life Small </small>
    </div>

    <form class="form" @submit.prevent="redeemToAccount">
      <p class="form__title" for="">Enter your gomoney account number</p>

      <FloatingInput
        type="tel"
        v-model="number"
        placeholder="Account no/ phone no"
      />
      <div class="form__submit tw-relative">
        <div
          class="tw-absolute tw--top-2 tw-text-center tw-w-full tw-text-red-400"
        >
          {{ error }}
        </div>
        <FormBtn :disabled="disableBtn">
          <Spinner v-if="loading" height="15px" />
          <template v-else> {{ btnText }}</template>
        </FormBtn>
      </div>
    </form>
  </main>
</template>

<script>
import { getGomoneyAccDetails } from '~/utils/api'
export default {
  data() {
    return {
      number: '',
      data: {},
      loading: false,
      error: '',
      btnText: 'Verify',
      disable: false,
    }
  },

  computed: {
    name() {
      return (
        Object.keys(this.data).length &&
        this.data.first_name.toUpperCase() +
          ' ' +
          this.data.last_name.toUpperCase()
      )
    },
    disableBtn() {
      return this.number.length < 10 || this.disable
    },
  },

  watch: {
    number(newVal, oldVal) {
      if (newVal.length < oldVal.length) {
        this.data = {}
        this.btnText = 'Verify'
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
          if (data.status !== 'success') throw new Error('An Error Occurred')
          this.data = data.data
          this.btnText = 'Redeem To ' + this.name
          this.disable = false
        } catch (err) {
          this.error = err.message
          this.btnText = 'Verify'
        }
      } else {
        console.log('data has been fetched')
      }
      this.loading = false
      setTimeout(() => {
        this.error = ''
        this.disable = false
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
