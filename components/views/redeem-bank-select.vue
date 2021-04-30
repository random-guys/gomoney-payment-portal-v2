<template>
  <section class="bank">
    <article class="article">
      <p class="text--semibold">Abubakar Shomala</p>
      <p class="text--light">Sent you</p>
      <p class="text--semibold">500,000.00</p>
    </article>

    <article class="article">
      <p class="text--light">
        Get your money in a gomoney account for free, or send to any Nigerian
        bank account at the regular bank rates.
      </p>
    </article>

    <article class="article">
      <p class="text--semibold">Claim your money to</p>
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

    <br />
    <p><a href="">Open a gomoney account for free</a></p>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pages/redeem-payment';
.bank {
  padding-top: 4.125rem;
}

.article {
  margin-top: 20px;
  line-height: 2;
  text-align: center;
  font-size: 15px;

  p {
    line-height: 1.8;
  }
}

.options {
  padding: 16px 66px 14px 16px;
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
