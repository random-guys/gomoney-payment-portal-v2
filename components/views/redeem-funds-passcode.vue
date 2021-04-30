<template>
  <article class="passcode">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold">N 5000,000.00</p>
    </div>

    <form class="form" @submit.prevent="handlePasscode">
      <label for="">Enter the passcode shared with the link</label>

      <div id="floatContainer" class="float__container form__field">
        <label for="passcode" class="float__label text-light">Passcode</label>
        <input
          id="passcode"
          v-model.number="passcode"
          class="float__input"
          type="number"
          data-placeholder=""
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div class="form__field">
        <button type="submit" class="btn" :disabled="!passcode">Proceed</button>
      </div>

      <p class="text--light">This code can only be used once</p>
    </form>

    <article class="article">
      <p class="article__heading">Claiming your money</p>
      <p class="text--light">
        <a href="">open a gomoney account</a> and have your money sent there
        free of charge, or transfer to any existing Nigerian bank account.
        Either way, you'll get your money instantly!
      </p>

      <br />

      <p class="text--light">
        Three lines about gomoney <br />
        <br />

        We store the data you submit through this page to meet financial
        regulations, track transactions (if we need to) and improve our service.
      </p>
    </article>
  </article>
</template>

<script>
import handleInput from '@/mixins/handleInput.js'

export default {
  mixins: [handleInput],
  data() {
    return {
      passcode: '',
    }
  },
  methods: {
    handlePasscode() {
      this.$emit('passcode', this.passcode)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';
@import '@/assets/styles/components/floating-input.scss';
@import '@/assets/styles/components/buttons.scss';
@import '@/assets/styles/components/form.scss';

.passcode {
  padding-top: 9rem;
}

.article {
  margin-top: 21.5px;
  line-height: 1.8;
  text-align: left;
  font-size: 15px;
}

.article__heading {
  margin: 21.5px 0px 12px 0px;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #7f7f7f;
}
</style>
