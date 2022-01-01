<template>
  <section class="info">
    <article class="article">
      <p class="text--semibold">Choose a payment method</p>
    </article>

    <article class="article options">
      <div class="options__item" @click="$emit('gomoney')">
        <img
          class="options__img"
          src="@/assets/icons/bank-transfer.svg"
          alt="gomoney logo green"
        />
        <div class="options__text">
          <p>Gomoney</p>
          <small>Instant. Free</small>
        </div>
      </div>
      <div class="options__item" @click="$emit('others')">
        <img
          class="options__img"
          src="@/assets/icons/bank-transfer.svg"
          alt="gomoney logo green"
        />
        <div class="options__text">
          <p>Transfer (Nigerian Banks)</p>
          <small>Instant. Fees apply</small>
        </div>
      </div>
    </article>

    <article class="article">
      <a class="article__link" href="">Open a gomoney account for free</a>
    </article>
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
  padding-top: 4.125rem;
  width: 100%;
}

.text--light {
  line-height: 2;
}

.options {
  padding: 16px;
  border-radius: 10px;
  background-color: #f3f3f3;
  text-align: left;
}

.options__item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}

.options__item:not(:first-of-type) {
  margin-top: 20px;
}

.options__text {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  p {
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #000000;
  }

  small {
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #969595;
  }
}
</style>
