<template>
  <main class="passcode">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">&#8358;5000,000.00</p>
      <small class="text--light"> For: Chop Life Small </small>
    </div>

    <form class="form" @submit.prevent="redeemGomoney">
      <p class="form__title" for="">Enter your gomoney account number</p>

      <FloatingInput
        type="tel"
        v-model="number"
        placeholder="Account no/ phone no"
      />
      <div class="form__field">
        <button type="submit" class="btn" :disabled="!number">
          Pay Temi Kara
        </button>
      </div>

      <p class="text--light">This code can only be used once</p>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      number: 73292903,
    }
  },
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
  margin-top: 30px;

  &__title {
    margin-bottom: 20px;
  }
}
</style>
