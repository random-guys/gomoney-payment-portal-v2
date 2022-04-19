<template>
  <main class="passcode">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">&#8358;5000,000.00</p>
    </div>

    <form class="form" @submit.prevent="handlePasscode">
      <p class="form__title" for="">Enter the passcode shared with the link</p>

      <FloatingInput type="tel" v-model="passcode" placeholder="Passcode" />
      <div class="form__field">
        <button type="submit" class="btn" :disabled="!passcode">Proceed</button>
      </div>

      <p class="text--light">This code can only be used once</p>
    </form>

    <article class="article">
      <p class="article__heading">Claiming your money</p>
      <p class="text--light">
        <a href="">open a gomoney account</a> and have your money sent there
        free of charge, or transfer to any existing Nigerian bank account.
        Either way, you'll get your money instantly!
      </p>

      <p class="text--light article__info">
        <span>Three lines about gomoney</span>

        We store the data you submit through this page to meet financial
        regulations, track transactions (if we need to) and improve our service.
      </p>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      passcode: 'ldsjjfklajkdf',
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.text {
  &--semibold {
    margin-top: 10px;
  }
}

.form {
  margin-top: 20px;

  &__title {
    margin-bottom: 20px;
  }
}

.article {
  text-align: left;

  &__heading {
    margin: 50px 0 20px;
    font-weight: 600;
    color: #7f7f7f;
  }

  &__info {
    margin-top: 20px;

    span {
      display: block;
      margin: 20px 0;
    }
  }
}
</style>
