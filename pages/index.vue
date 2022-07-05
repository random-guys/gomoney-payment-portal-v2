<template>
  <div id="index-page">
    <!-- <component :is="currentComponent" :key="currentComponent" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { verifyLink } from '~/utils/api'

export default {
  name: 'IndexPage',

  data() {
    return {}
  },
  computed: {
    ...mapGetters(['claimed', 'expired']),
  },

  async beforeMount() {
    const noItem = JSON.stringify('')
    const savedLink = JSON.parse(
      window.sessionStorage.getItem('link') || noItem
    )

    if (!this.$route.hash.length && !savedLink) {
      window.open('https://gomoney.global', '_self')
      return
    }

    const link = this.$route.hash.slice(1) || savedLink

    window.sessionStorage.clear()
    window.sessionStorage.setItem('link', JSON.stringify(link))

    try {
      const {
        data: { data },
      } = await verifyLink(link)

      this.$store.commit('SET_LINK_DETAILS', data)

      if (data.claimed || data.expired) throw new Error()

      this.$store.commit('SET_HASH_LINK', true)
      this.$store.commit('SET_LINK', link)

      this.$router.push({
        path: '/payment/passcode',
        query: {
          auth: Date.now(),
        },
      })
    } catch (err) {
      console.error(err)
      this.$router.push('/verify-link')
    }
  },
}
</script>

<style lang="scss" scoped>
#index-page {
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: grid;
  place-items: center;
}
</style>
