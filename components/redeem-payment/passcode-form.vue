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
@import '@/assets/styles/components/floating-input.scss';
@import '@/assets/styles/components/buttons.scss';
@import '@/assets/styles/components/form.scss';

.passcode {
  width: 100%;
}

.form {
  width: 100%;

  &__field {
    margin-top: 12px;
    margin-bottom: 12px;
  }
}
</style>
