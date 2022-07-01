<template>
  <main class="method page-animate">
    <div class="text">
      <p class="text--semibold">Abubakar Shomala</p>
      <small class="text--light">Sent you </small>
      <p class="text--semibold tw-mt-4">&#8358;{{ amount.toLocaleString() }}</p>
    </div>

    <p class="text--light">
      Get your money in a gomoney account for free, or send to any Nigerian bank
      account at the regular bank rates.
    </p>

    <p class="text--semibold">Choose Payment Method</p>

    <div class="pay">
      <button @click="redeemGomoney" class="pay__gomoney">
        <img
          class="pay__gomoney--logo"
          src="@/assets/img/gomoney-transfer.svg"
          alt="gomoney"
        />
        <div>
          <p class="info text--semibold">Gomoney</p>
          <small class="text--light">Instant. Free</small>
        </div>
        <img class="icon" src="@/assets/img/icon-right.svg" alt="gomoney" />
      </button>
      <button @click="redeemOther" class="pay__other">
        <div class="arrow-wrapper">
          <img class="icon" src="@/assets/img/arrow-right.svg" alt="gomoney" />
        </div>
        <div>
          <p class="info text--semibold">Transfer (Nigerian Banks)</p>
          <small class="text--light"
            >Instant • &#8358;{{ charge.toLocaleString() }} Fees apply
          </small>
        </div>
        <img class="icon" src="@/assets/img/icon-right.svg" alt="gomoney" />
      </button>
    </div>
    <aside>
      <button @click="$router.push('/payment/open-account')">
        <span class="text__bold--blue">Open a gomoney account for free</span>
        <img class="icon" src="@/assets/img/Mask.svg" alt="gomoney" />
      </button>
    </aside>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      charge: 10.75,
    }
  },
  computed: {
    ...mapGetters(['amount']),
  },
  methods: {
    redeemGomoney() {
      this.$router.push('/payment/redeem-gomoney')
    },
    redeemOther() {
      this.$router.push('/payment/redeem-other')
    },
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

p.text--light {
  margin: 20px 0;
  line-height: 1.5rem;
}

.pay {
  margin: 1.25rem 0;
  border-radius: 10px;
  background: $lightGray;
  padding: 0 1rem;

  button {
    display: flex;
    align-items: center;
    text-align: left;
    width: 100%;
    padding: 1.25rem 0;

    .pay__gomoney--logo {
      height: 2.63rem;
      width: 2.63rem;
    }

    div {
      margin-left: 1em;

      .info {
        margin: 0;
      }
    }

    .icon {
      height: 10px;
      width: 10px;
      margin-left: auto;
    }
  }

  &__gomoney {
    border-bottom: 1px solid #d8d8d8;
  }

  &__other {
    .arrow-wrapper {
      margin: 0;
      width: 2.63rem;
      height: 2.63rem;
      display: flex;
      align-items: center;
      background: #ffe3e5;
      border-radius: 12px;
      padding: 0 0.5rem;

      img {
        display: inline;
        margin: 0;
        width: 100%;
        height: auto;
      }
    }
  }
}

aside {
  padding: 0 0.5rem;
  margin: 50px 0 0;

  button {
    margin: auto;
    width: 100%;
    display: flex;
    color: #3265e3;
    background: #e1eeff;
    border-radius: 28px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.8rem;
  }
}
</style>
