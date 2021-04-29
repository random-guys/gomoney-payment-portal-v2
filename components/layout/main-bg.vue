<template>
  <section class="main-bg">
    <article class="main-bg__content">
      <h2 class="main-bg__title1">Easy. Fast. Reliable</h2>
      <h1 class="main-bg__title2">Accessible Banking</h1>
      <img
        class="main-bg__img"
        src="@/assets/img/users-group.png"
        alt="users illustration for gomomeny payment portal"
      />

      <div class="group">
        <a class="group__img" href="https://gomoney.global/app">
          <img
            src="@/assets/icons/apple-app-store.svg"
            alt="apple app store icon to download gomoney app"
          />
        </a>

        <a class="group__img" href="https://gomoney.global/app">
          <img
            src="@/assets/icons/android-play-store.svg"
            alt="android play store icon to download gomoney app"
          />
        </a>
      </div>
      <p class="main-bg__subtitle">Download now</p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.main-bg {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: royalblue;
  background-image: url('@/assets/img/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

  &__title1 {
    font-size: 40px;
    font-weight: normal;
    line-height: 1.6;
    color: #ffffff;
  }

  &__title2 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.6;
    color: #ffffff;
  }

  &__img {
    margin: 1.438rem 0;
  }

  &__subtitle {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
  }
}

.group {
  margin-bottom: 0.688rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__img:not(:first-of-type) {
    margin-left: 0.75rem;
  }
}
</style>
