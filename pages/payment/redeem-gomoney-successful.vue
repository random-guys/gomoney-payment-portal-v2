<template>
  <div class="tw-w-full page-animate">
    <div>
      <h3 class="tw-text-center text-xl blue tw-mt-12">Successful!</h3>
      <div
        class="success-card tw-bg-blue-light tw-text-center tw-rounded-lg tw-p-3 tw-mt-4 tw-mx-auto"
      >
        <img src="~/assets/img/success-logo.svg" />
      </div>

      <p class="tw-text-center tw-font-medium tw-mt-4">
        &#8358;{{ (amount / 100).toFixed(2) }} has been sent to your account
      </p>
    </div>
    <QrCode />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QrCode from '~/components/qr-code.vue'
export default {
  components: { QrCode },
  computed: {
    ...mapGetters(['amount']),
  },
  beforeMount() {
    window.sessionStorage.clear()
  },
}
</script>
<style lang="scss" scoped>
.success-card {
  width: 160px;
  aspect-ratio: 1/1;
  border-radius: 48px;
  display: grid;
  place-items: center;
}

.blue {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1.3px;
  color: #376bf2;
}
</style>
