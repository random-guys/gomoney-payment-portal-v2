<template>
  <main class="main">
    <section class="main__bg__section">
      <app-main-bg />
    </section>
    <section class="main__page__section">
      <Nuxt />
    </section>
  </main>
</template>

<script>
import MainBg from '@/components/layout/main-bg.vue'
export default {
  components: {
    'app-main-bg': MainBg,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/base/global';

.main {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &__bg__section {
    height: 100vh;
    flex: 0 0 50%;
  }

  &__page__section {
    height: 100vh;
    background-color: #ffffff;
    flex: 0 0 50%;
  }
}

@media only screen and (max-width: 768px) {
  .main {
    background-color: white;

    &__bg__section {
      display: none;
    }

    &__page__section {
      background-color: #ffffff;
      flex: 0 0 100%;
    }
  }
}
</style>
