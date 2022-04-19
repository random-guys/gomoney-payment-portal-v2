<template>
  <div>
    <button
      v-on="click ? { click: event } : {}"
      type="submit"
      class="tw-w-full tw-bg-blue tw-rounded tw-text-sm tw-text-white tw-p-4 hover:tw-bg-purple tw-transition-all tw-duration-300"
    >
      <span class="tw-font-medium">{{ title }}</span>
      <!-- <img
        v-show="loading"
        class="tw-m-auto"
        src="@/assets/img/spinner.svg"
        alt="animated spinner"
      /> -->
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormBtn',

  props: {
    title: { type: String, default: () => '', required: true },
    // loading: { type: Boolean, default: () => false },
    event: { type: Function },
    click: { type: String },
  },
}
</script>

<style lang="scss" scoped></style>
