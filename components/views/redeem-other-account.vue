<template>
  <article class="account">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <p class="text--light">Sent you</p>
      <p class="text--semibold">N 500,000.00</p>
      <p class="text--light">For: Chop Life Small</p>
    </div>

    <form class="form" @submit.prevent="$emit('pay')">
      <label for="">Enter the passcode shared with the link</label>

      <div id="floatContainer" class="float__container form__field">
        <label for="bank" class="float__label text-light">Bank</label>
        <input
          id="bank"
          class="float__input"
          type="number"
          data-placeholder=""
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>
      <div id="floatContainer" class="float__container form__field">
        <label for="account-number" class="float__label text-light"
          >Account number</label
        >
        <input
          id="account-number"
          v-model.number="passcode"
          class="float__input"
          type="number"
          data-placeholder=""
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div class="form__field">
        <button type="submit" class="btn">Pay Raymond Tukpe</button>
      </div>
    </form>
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

.account {
  padding-top: 4.125rem;
  width: 100%;
}

.text--light {
  line-height: 2;
}

.form {
  margin-top: 25px;
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
