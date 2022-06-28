<template>
  <div class="tw-w-full page-animate">
    <div>
      <h3 class="tw-text-center text-xl blue tw-mt-12">Successful!</h3>
      <div
        class="success-card tw-bg-blue-light tw-text-center tw-rounded-lg tw-p-3 tw-mt-4 tw-mx-auto"
      >
        <img src="~/assets/img/success-logo.svg" />
      </div>

      <p class="tw-text-center tw-font-medium tw-mt-4">
        Your money has been sent to your account
      </p>
    </div>
    <footer class="tw-mt-16">
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
  </div>
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
.success-card {
  width: 160px;
  aspect-ratio: 1/1;
  border-radius: 48px;
  display: grid;
  place-items: center;
}

.blue {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1.3px;
  color: #376bf2;
}

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
