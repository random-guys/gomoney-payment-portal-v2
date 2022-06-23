<template>
  <div id="index-page">
    <!-- <component :is="currentComponent" :key="currentComponent" /> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',

  data() {
    return {}
  },

  beforeMount() {
    if (this.$route.hash.length > 10) {
      this.$store.commit('SET_LINK', this.$route.hash.slice(1))
      this.$router.push('/payment/passcode')
    } else {
      window.open('https://gomoney.global', '_self')
    }
    // axios
    //   .get(process.env.baseUrl + '/link/' + this.$route.hash)
    //   .then((res) => console.log(res, 'lol'))
  },
}
</script>

<style lang="scss" scoped>
#index-page {
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
}
</style>
