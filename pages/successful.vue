<template>
  <section class="success container">
    <div class="success__img"></div>

    <article>
      <h2 class="success__title">{{ title }}</h2>
      <p class="success__subtitle">{{ subtitle }}</p>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => 'Successful!',
    },
    subtitle: {
      type: String,
      default: () => 'Your money has been sent to your account',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';

.success {
  align-items: flex-start;
  text-align: center;
  padding-top: 7.438rem;

  &__img {
    width: 163px;
    height: 167px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #dbecff;
    margin-bottom: 29px;
  }

  &__title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.24px;
    text-align: center;
    color: #376bf2;
  }

  &__subtitle {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.16px;
    text-align: center;
    color: #171717;
  }
}

.app-logo {
  position: fixed;
  top: 10%;
}

.redeem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
