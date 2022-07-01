<template>
  <div id="link-error">
    <!-- <component :is="currentComponent" :key="currentComponent" /> -->
    <p v-if="claimed">Link has been used</p>
    <p v-else-if="expired">Link has expired</p>
    <p v-else>Error!!! No link</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['claimed', 'expired']),
  },
}
</script>

<style lang="scss" scoped>
#link-error {
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: grid;
  place-items: center;
}
</style>
