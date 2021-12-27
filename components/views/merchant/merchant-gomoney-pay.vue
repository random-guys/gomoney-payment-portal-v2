<template>
  <article class="info">
    <article class="article">
      <p class="text--semibold">Pay</p>

      <img class="info__img" src="" alt="user image " />
      <p class="text--semibold">Foodish Ltd</p>
      <p>Food delivery</p>
    </article>

    <article class="article">
      <p class="text--semibold">N500,000.00</p>
    </article>

    <form class="form" @submit.prevent="handlePasscode">
      <label for="">Enter your billing information</label>

      <div id="floatContainer" class="float__container form__field">
        <label for="name" class="float__label text-light">Your name</label>
        <input
          id="name"
          v-model="name"
          class="float__input"
          type="text"
          data-placeholder=""
          required
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div id="floatContainer" class="float__container form__field">
        <label for="email" class="float__label text-light">Email address</label>
        <input
          id="email"
          v-model="email"
          class="float__input"
          type="email"
          data-placeholder=""
          required
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div id="floatContainer" class="float__container form__field">
        <label for="phone" class="float__label text-light">Phone number</label>
        <input
          id="phone"
          v-model.number="phone"
          class="float__input"
          type="tel"
          data-placeholder=""
          required
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div class="form__field">
        <button type="submit" class="btn">Send N500,000 to Foodish</button>
      </div>

      <p class="text__secure">Secure and encrypted</p>
    </form>
  </article>
</template>

<script>
import handleInput from '@/mixins/handleInput.js'

export default {
  mixins: [handleInput],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
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

.info {
  padding-top: 4.125rem;
  width: 100%;
}

.info__img {
  margin: 26px auto 12px auto;
  height: 74px;
  width: 74px;
}

.text--light {
  line-height: 2;
}

.form {
  margin-top: 25px;
}
</style>
