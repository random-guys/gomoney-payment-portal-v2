<template>
  <article class="info">
    <article class="article">
      <img class="info__img" src="" alt="user image " />
      <p class="text--semibold">Pay Raymond Tukpe</p>
    </article>

    <form class="form" @submit.prevent="$emit('pay')">
      <div id="floatContainer" class="float__container form__field">
        <label for="amount" class="float__label text-light"
          >Amount to pay</label
        >
        <input
          id="amount"
          v-model.number="amount"
          class="float__input"
          type="number"
          data-placeholder=""
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div id="floatContainer" class="float__container form__field">
        <label for="message" class="float__label text-light">Message</label>
        <input
          id="message"
          v-model.number="amount"
          class="float__input"
          type="text"
          data-placeholder=""
          @focus="handleFocus($event)"
          @blur="handleBlur($event)"
        />
      </div>

      <div class="form__field">
        <button type="submit" class="btn">Send N10,000 to Raymond</button>
      </div>
      <p class="text__secure">Secure and encrypted</p>
    </form>
  </article>
</template>

<script>
import handleInput from '@/mixins/handleInput.js'

export default {
  mixins: [handleInput],
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
