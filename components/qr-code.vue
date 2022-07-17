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
        <button @click="appLink">
          <img
            class="qrcode"
            src="~/assets/img/qr-code.png"
            alt="Qr code android"
          />
        </button>
      </div>
    </aside>
  </footer>
</template>

<script>
export default {
  methods: {
    appLink() {
      window.open('https://gomoney.global/app', '_self')
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
        width: 150px;
        aspect-ratio: 1/1;
      }
      button {
        cursor: pointer;
      }
    }
  }
}
</style>
