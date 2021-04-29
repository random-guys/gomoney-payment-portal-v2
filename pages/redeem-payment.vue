<template>
  <section class="container redeem">
    <app-gomoney-logo class="logo" />

    <app-passcode-form class="redeem__passcode" />

    <article class="redeem__article">
      <p class="redeem__article__heading">Claiming your money</p>
      <p class="text--light">
        <a href="">open a gomoney account</a> and have your money sent there
        free of charge, or transfer to any existing Nigerian bank account.
        Either way, you'll get your money instantly!
      </p>

      <br />

      <p class="text--light">
        Three lines about gomoney <br />

        We store the data you submit through this page to meet financial
        regulations, track transactions (if we need to) and improve our service.
      </p>
    </article>
  </section>
</template>

<script>
import GomoneyLogo from '@/components/layout/gomoney-logo.vue'
import PasscodeForm from '@/components/redeem-payment/passcode-form.vue'

export default {
  components: {
    'app-gomoney-logo': GomoneyLogo,
    'app-passcode-form': PasscodeForm,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';

.redeem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__article {
    margin-top: 21.5px;
    line-height: 1.8;
    text-align: left;
    font-size: 15px;
  }

  &__article__heading {
    margin: 21.5px 0px 12px 0px;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.19px;
    color: #7f7f7f;
  }
}
</style>
