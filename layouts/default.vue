<template>
  <div id="layout" v-if="hashLink" class="tw-px-4 lg:tw-px-0">
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
    <main class="tw-pt-20">
      <div class="container">
        <img class="tw-mx-auto" src="@/assets/img/logo.svg" alt="gomoney" />
        <div class="tw-w-full tw-mt-12">
          <Nuxt />
        </div>
      </div>
    </main>
  </div>
  <div v-else>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'default',
  // data() {
  //   return {
  //     hashLink: false,
  //   }
  // },

  computed: {
    ...mapState(['hashLink']),
  },

  watch: {
    hashLink(newVal, oldVal) {
      console.log(newVal, oldVal, 'here')
    },
  },

  // async beforeMount() {
  //   if (this.$route.hash.length > 10) {
  //     try {
  //       const {
  //         data: { data },
  //       } = await verifyLink(this.$route.hash.slice(1))

  //       this.$store.commit('SET_LINK_DETAILS', data)

  //       if (data.claimed || data.expired) throw new Error()

  //       this.hashLink = true

  //       this.$store.commit('SET_LINK', this.$route.hash.slice(1))
  //       this.$router.push('/payment/passcode')
  //     } catch (err) {
  //       console.error(err)
  //       this.$router.push('/verify-link')
  //     }
  //   } else {
  //     this.$router.push('/verify-link')
  //   }
  // },
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
  .container {
    max-width: 400px;
    margin: auto;

    .page-animate {
      animation-name: fadeIn;
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
    }
  }
}
</style>
