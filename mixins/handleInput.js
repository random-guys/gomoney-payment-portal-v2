export default {
  methods: {
    handleFocus(event) {
      const { target } = event
      target.parentNode.classList.add('active')
      target.setAttribute(
        'placeholder',
        target.getAttribute('data-placeholder')
      )
    },

    handleBlur(event) {
      const { target } = event
      if (!target.value) target.parentNode.classList.remove('active')
      target.removeAttribute('placeholder')
    },
  },
}
