<template>
  <section class="send-account">
    <article class="article">
      <p class="text--semibold">Send money</p>
      <p class="text--light">
        Pay anyone with a gomoney account through this page. Split dinner, share
        the bill or just send a little present. It’s fun, try it.
      </p>
    </article>

    <form class="form" @submit.prevent="$emit('pay')">
      <label for="">Enter the phone number you want to pay</label>

      <div
        id="floatContainer"
        :class="!!phone ? 'active' : ''"
        class="float__container form__field"
      >
        <label
          for="phone-number"
          class="float__label text-light"
          @click="focusInputField"
          >Account no / Phone number</label
        >
        <input
          id="phone-number"
          ref="numberInput"
          v-model="phone"
          class="float__input"
          type="text"
          pattern="[0-9]*"
          data-placeholder=""
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div class="form__field">
        <button type="submit" :disabled="!phone" class="btn">Pay</button>
      </div>
      <p class="text__secure">
        <img src="@/assets/icons/lock.svg" alt="lock icon" /> Secure and
        encrypted
      </p>
    </form>
    <article class="article article2">
      <p>Powered by <a href="https://gomoney.global/app">gomoney</a></p>
      <p class="text--light">Three lines about gomoney</p>
      <p class="text--light">
        We store the data you submit through this page to meet financial
        regulations, track transactions (if we need to) and improve our service.
      </p>
    </article>
  </section>
</template>

<script>
import handleInput from '@/mixins/handleInput.js'

export default {
  mixins: [handleInput],
  data() {
    return {
      phone: '',
    }
  },
  methods: {
    focusInputField() {
      this.$refs.numberInput.focus = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/floating-input.scss';
@import '@/assets/styles/components/buttons.scss';
@import '@/assets/styles/components/form.scss';
.send-account {
  margin-top: 48px;

  .form {
    margin-top: 40px;

    .text__secure {
      img {
        display: inline;
        margin-right: 5px;
      }
    }
  }

  .article2 {
    margin-top: 97px;
    text-align: left;

    p {
      margin-top: 1rem;
    }
  }
}
</style>
