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
      <div class="bank">
        <FloatingInput
          type="text"
          v-model="bank"
          :select="true"
          placeholder="Bank Name"
        />
      </div>
      <FloatingInput
        type="tel"
        v-model="accountNo"
        placeholder="Account no/ phone no"
      />
      <div class="form__field">
        <button type="submit" class="btn" :disabled="!accountNo">
          Redeem Payment
        </button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      accountNo: '73292903',
      bank: '',
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

  .bank {
    margin: 20px 0;
  }

  button {
    font-weight: 600;
  }
}
</style>
