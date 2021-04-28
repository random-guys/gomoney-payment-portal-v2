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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.main {
  font-family: 'Roboto', sans-serif;
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
    background-color: #ffffff;
    flex: 0 0 50%;
  }
}

@media only screen and (max-width: 768px) {
  .main {
    background-color: lightblue;

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
