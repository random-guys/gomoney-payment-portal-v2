<template>
  <div id="layout" class="tw-px-4 lg:tw-px-0">
    <div
      class="tw-relative tw-h-screen tw-hidden lg:tw-flex lg:tw-flex-col lg:tw-justify-center"
    >
      <LayoutImage />
      <img
        class="bg-img tw-absolute tw-bottom-0 tw-h-screen tw-w-full"
        src="https://res.cloudinary.com/gomoney/image/upload/v1642037686/payment-link/ql0zn5lk47gyisqjrffe.webp"
        alt="onboarding"
      />
    </div>
    <div class="tw-w-full tw-flex tw-justify-center tw-items-center tw-mt-14">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>

<style lang="scss" scoped>
#layout {
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .bg-img {
    z-index: -10;
  }
}
</style>
