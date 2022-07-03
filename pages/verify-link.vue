<template>
  <div id="verify-link">
    <div class="tw-text-center">
      <h3 class="tw-text-red-400 tw-text-lg">
        <template v-if="claimed">Link has been used</template>
        <template v-else-if="expired">Link has expired</template>
        <template v-else>Error Link!!!</template>
      </h3>
      <p>
        Redirecting To
        <a href="https://gomoney.global" target="_self">Homepage</a> In
        {{ timeout }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      timeout: 5,
    }
  },
  computed: {
    ...mapGetters(['claimed', 'expired']),
  },
  mounted() {
    const redirectToHome = setInterval(() => {
      this.timeout -= 1
      if (!this.timeout) {
        clearInterval(redirectToHome)
        window.open('https://gomoney.global', '_self')
      }
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
#verify-link {
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: grid;
  place-items: center;
}
</style>
