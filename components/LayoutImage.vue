<template>
  <div id="layout-image">
    <div class="tw-text-center tw-text-white">
      <h3 class="text-top">Easy. Fast. Reliable</h3>
      <h3 class="text-bottom tw-font-semibold tw-mb-6">Accessible Banking</h3>
    </div>
    <img
      class="img tw-relative tw-mx-auto tw-z-10"
      src="https://res.cloudinary.com/gomoney/image/upload/v1642037581/payment-link/aepmkalc1w3uyz8ye0ar.webp"
      alt="onboarding"
    />
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-8">
      <div class="tw-flex tw-justify-center tw-mb-2">
        <a
          class="tw-cursor-pointer"
          href="https://apps.apple.com/us/app/gomoney-the-digital-bank/id1491085974"
          target="_blank"
        >
          <img
            class="tw-relative tw-mr-3 tw-z-10"
            src="@/assets/img/apple-logo.svg"
            alt="apple logo"
          />
        </a>
        <a
          class="tw-cursor-pointer"
          href="https://play.google.com/store/apps/details?id=com.global.gomoney&hl=en&gl=US"
          target="_blank"
        >
          <img
            class="tw-relative tw-z-10"
            src="@/assets/img/playstore-logo.svg"
            alt="apple logo"
          />
        </a>
      </div>
      <p class="tw-text-white tw-text-lg">Download now</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutImage',
}
</script>

<style lang="scss" scoped>
#layout-image {
  .text-top,
  .text-bottom {
    font-size: 2.5rem;
  }
  .img {
    max-width: 338px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
