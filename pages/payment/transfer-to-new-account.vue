<template>
  <div id="account-created" class="tw-w-full tw-pb-10">
    <h3 class="tw-text-center tw-text-xl tw-font-semibold tw-mb-6">
      You have successfully created a Gomoney account
    </h3>
    <form @submit.prevent="confirm">
      <div class="tw-bg-gray-lightest tw-rounded-lg tw-mb-5">
        <div class="tw-text-center tw-rounded-lg">
          <div class="tw-p-8">
            <p class="tw-text-sm tw-text-gray">Bank Name</p>
            <h3 class="tw-text-xl tw-font-medium tw-capitalize">Gomoney</h3>
          </div>
        </div>
        <div class="tw-bg-blue-light tw-text-center tw-rounded-lg">
          <div class="tw-p-3">
            <p class="tw-text-sm tw-text-gray">Account Name</p>
            <h3 class="tw-text-xl tw-font-semibold tw-capitalize">
              {{ firstName }} {{ lastName }}
            </h3>
            <p class="tw-text-sm tw-text-gray tw-mt-4">Account number</p>
            <h3
              class="tw-flex tw-justify-center tw-items-center tw-text-xl tw-font-medium tw-text-blue"
            >
              <span ref="acc_number">{{ accountNumber }}</span>
              <button @click="copyToClipboard" class="tw-ml-1.5">
                <img src="@/assets/img/copy.svg" alt="gomoney" />
              </button>
            </h3>
            <p class="tw-text-sm tw-text-gray">
              <button @click="copyToClipboard">{{ copyText }}</button>
            </p>
          </div>
        </div>
      </div>
      <FormBtn :title="`Claim N${amountToPay} to your Account`" />
      <div class="tw-mt-48"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'transferToNewAccount ',
  data() {
    return {
      copyText: 'Click To Copy',
      amountToPay: 100,
      image: 'working',
    }
  },
  computed: {
    ...mapGetters(['accountNumber', 'firstName', 'lastName']),
  },
  methods: {
    copyToClipboard(e) {
      e.preventDefault()
      const account = this.$refs.acc_number.innerText
      navigator.clipboard.writeText(account)
      this.copyText = 'Copied!'
    },
  },
}
</script>

<style lang="scss" scoped>
#account-created {
  max-width: 380px;

  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
