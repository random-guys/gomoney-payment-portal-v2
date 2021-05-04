<template>
  <section class="processing">
    <article class="article processing__img">
      <img src="@/assets/icons/face-eyes.svg" alt="waiting user face" />
    </article>

    <article class="article">
      <p class="text__bold--blue">00:55</p>
    </article>

    <article class="info__details">
      <div class="info__details__box info__details__box--blue">
        <p class="text--light">You have paid</p>
        <p class="text--semibold">N 500,000.00</p>
        <p class="text--light">To Foodish Ltd</p>
        <p class="text--semibold">8005676890</p>
      </div>
    </article>

    <article class="article">
      <p>Waiting for confirmation, do not close this page</p>
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

.processing {
  padding-top: 122px;
  width: 100%;
  text-align: center;
}

.processing__img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 103px;
  width: 128px;
  margin: 0 auto;

  img {
    max-height: 100%;
    max-width: 100%;
  }
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
