<template>
  <section class="info">
    <article class="article">
      <p class="text--semibold">Choose a payment method</p>
    </article>

    <article class="article options">
      <div class="options__item" @click="$emit('gomoney')">
        <img
          class="options__img"
          src="@/assets/img/gomoney-logo.svg"
          alt="gomoney logo green"
        />
        <div class="options__text">
          <div>
            <p>Gomoney</p>
            <small>Instant. Free</small>
          </div>
          <span>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svg"
                d="M1 1L5.242 5.243L1 9.4849"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <hr />
      <div class="options__item" @click="$emit('others')">
        <img
          class="options__img"
          src="@/assets/icons/bank-transfer.svg"
          alt="gomoney logo green"
        />
        <div class="options__text">
          <div>
            <p>Transfer (Nigerian Banks)</p>
            <small>Instant. Fees apply</small>
          </div>
          <span>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svg"
                d="M1 1L5.242 5.243L1 9.4849"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>

    <article class="article">
      <a
        class="article__link"
        href="https://gomoney.global/app/"
        target="_blank"
        ><span>Open a gomoney account for free</span>
        <img src="@/assets/icons/arrow-right.svg" alt="arrow right icon"
      /></a>
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
@import '@/assets/styles/abstracts/_variables.scss';
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

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: all 0.75s ease-in;

    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }

  hr {
    margin-top: 20px;
    border-color: #fefefe;
    opacity: 0.3;
  }

  &__text {
    display: flex;
    width: 100%;
    margin-left: 1rem;
    line-height: 0.5;
    transition: color 0.5s ease-in;

    p {
      font-size: 17px;
      font-weight: 500;
      margin-top: -10px;
    }

    small {
      font-size: 11px;
      color: #969595;
    }

    span {
      flex-grow: 1;
      text-align: right;
      align-self: center;
      #svg {
        stroke: #e5e5e5;
      }
    }
    &:hover {
      color: $pry-color;
      p,
      small {
        color: $pry-color;
      }
      #svg {
        stroke: $pry-color;
      }
    }
  }

  &__icon {
    flex-grow: 1;

    img {
      margin-left: auto;
    }
    #svg {
      stroke: #e5e5e5;
    }
  }
}
.article {
  &__link {
    padding: 0.5em 1em;
    margin: 50px auto;
    background: $light-blue;
    border-radius: 25px;
    display: flex;
    width: max-content;

    img {
      display: inline;
      margin-left: 5px;
    }
  }
}
</style>
