<template>
  <section class="info">
    <article class="article">
      <p class="text--semibold">
        Make a transfer from any bank app to: Foodish Ltd
      </p>
    </article>

    <article class="info__details">
      <div class="info__details__box info__details__box--grey">
        <p class="text--light">Amount to pay</p>
        <p text--semibold>N500,000.00</p>
        <p class="text--light">For: Chop Life Small</p>
      </div>

      <div class="info__details__box info__details__box--blue">
        <p class="text--light">bank name</p>
        <p class="text--semibold">Gomoney</p>
        <p class="text--light">Account number</p>
        <p class="text__bold--blue">8005676890</p>
        <p class="text--light">Click to copy</p>
      </div>
    </article>

    <form class="form" @submit.prevent="$emit('paid')">
      <div class="form__field">
        <button type="submit" class="btn">I have paid</button>
      </div>
    </form>
  </section>
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
  padding-top: 2.125rem;
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

.info__details {
  margin-top: 23px;
}

.info__details__box {
  padding-top: 35px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 180px;
  border-radius: 8px;

  &--grey {
    background: #f3f3f3;
  }

  &--blue {
    background: #dbecff;
    margin-top: -10px;
  }
}
</style>
