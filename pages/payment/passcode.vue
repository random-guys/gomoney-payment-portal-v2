<template>
  <main class="passcode page-animate">
    <div class="text">
      <p class="text--semibold">{{ firstName + ' ' + lastName }}</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">
        &#8358;{{ amount && (amount / 100).toFixed(2) }}
      </p>
    </div>

    <form class="form" @submit.prevent="handlePasscode">
      <p class="form__title" for="">Enter the passcode shared with the link</p>

      <FloatingInput type="tel" v-model="passcode" placeholder="Passcode" />
      <div class="form__submit tw-relative">
        <div
          class="tw-absolute tw--top-2 tw-text-center tw-w-full tw-text-red-400"
        >
          {{ error }}
        </div>
        <FormBtn :disabled="disableBtn">
          <Spinner v-if="loading" height="15px" />
          <template v-else> Proceed</template>
        </FormBtn>
      </div>

      <small class="text--light">This code can only be used once</small>
    </form>

    <article class="article">
      <p class="article__heading">Claiming your money</p>
      <p class="text--light">
        Open a gomoney account and have your money sent there free of charge, or
        transfer to any existing Nigerian bank account. Either way, you'll get
        your money instantly!
      </p>
      <p class="text--light article__info">
        <span>Three lines about gomoney</span>

        We store the data you submit through this page to meet financial
        regulations, track transactions (if we need to) and improve our service.
      </p>
    </article>
  </main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { claimLink } from '~/utils/api'

export default {
  data() {
    return {
      passcode: '',
      error: '',
      loading: false,
    }
  },
  computed: {
    ...mapState(['link']),
    ...mapGetters(['amount', 'claimed', 'expired', 'firstName', 'lastName']),
    disableBtn() {
      if (!this.passcode.length) return true
      return this.error.length > 1 || this.loading
    },
  },
  methods: {
    async handlePasscode() {
      this.loading = true
      try {
        if (this.passcode.length !== 6) {
          throw new Error()
        }

        const claim = await claimLink({
          link: this.link,
          passcode: this.passcode,
        })

        this.$store.commit('SET_PASSCODE', this.passcode)
        this.$router.push('/payment/method')
      } catch (err) {
        if (!navigator.onLine) {
          this.error = 'No Internet Connection'
        }
        this.error = 'Passcode Incorrect'
      } finally {
        this.loading = false
        setTimeout(() => {
          this.error = ''
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
  margin-top: 20px;

  &__title {
    margin-bottom: 20px;
  }
  &__submit {
    padding-top: 20px;
  }
  small {
    display: block;
    margin-top: 5px;
  }
}

.article {
  text-align: left;

  &__heading {
    margin: 50px 0 20px;
    font-weight: 600;
    color: #7f7f7f;
  }

  &__info {
    margin-top: 20px;

    span {
      display: block;
      margin: 20px 0;
    }
  }
}
</style>
