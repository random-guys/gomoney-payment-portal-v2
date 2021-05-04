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
      <small class="text--light">Trx ID <span>COPy</span></small>
    </article>

    <form class="form" @submit.prevent="$emit('pay')">
      <div class="form__field">
        <button type="submit" class="btn">Pay N500,000 to Foddish</button>
      </div>

      <small class="text__secure">Secure and encrypted</small>
    </form>
  </article>
</template>

<script>
export default {
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
