<template>
  <footer class="tw-mt-8">
    <h3
      class="tw-text-center tw-capitalize tw-text-lg tw-font-semibold tw-mb-2"
    >
      Get the gomoney app on your phone
    </h3>
    <p class="tw-text-center tw-font-medium tw-mt-4">
      Click or Scan the QR Code below
    </p>
    <aside class="tw-mt-4">
      <div>
        <button @click="playStoreLink">
          <img
            class="qrcode"
            src="~/assets/img/gomoney-ios.png"
            alt="Qr code android"
          />
        </button>
        <img
          class="mx-auto"
          src="@/assets/img/apple-logo-transparent.svg"
          alt="apple logo"
        />
      </div>
      <div>
        <button @click="appStoreLink">
          <img
            class="qrcode"
            src="~/assets/img/gomoney-andriod.png"
            alt="Qr code ios"
          />
        </button>
        <img
          class=""
          src="~/assets/img/android-logo-transparent.svg"
          alt="apple logo"
        />
      </div>
    </aside>
  </footer>
</template>

<script>
export default {
  methods: {
    playStoreLink() {
      window.open(
        'https://play.google.com/store/apps/details?id=com.global.gomoney&hl=en&gl=US',
        '_self'
      )
    },
    appStoreLink() {
      window.open(
        'https://apps.apple.com/us/app/gomoney-the-digital-bank/id1491085974',
        '_self'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  img {
    display: block;
    margin: 0 auto;
  }
  aside {
    display: flex;
    justify-content: space-evenly;
    div {
      text-align: center;
      .qrcode {
        width: 100px;
        aspect-ratio: 1/1;
      }
      button {
        cursor: pointer;
      }
    }
  }
}
</style>
