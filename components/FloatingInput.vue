<template>
  <div class="float__container tw-min-w-full">
    <label @click="focusInput" for="floatField" class="float__label">{{
      placeholder
    }}</label>
    <input
      v-if="!select"
      ref="input"
      class="float__input"
      :type="type"
      :pattern="checkIfPhoneOrAccount && '[0-9]+'"
      data-placeholder=""
      @focus="handleFocus($event)"
      @blur="handleBlur($event)"
      v-model="inputValue"
      @keydown="checkIfPhoneOrAccount ? handleInputValue($event) : undefined"
    />

    <select
      v-if="select"
      ref="input"
      class="float__input"
      :type="type"
      :pattern="checkIfPhoneOrAccount && '[0-9]+'"
      data-placeholder=""
      @focus="handleFocus($event)"
      @blur="handleBlur($event)"
      v-model="inputValue"
      :disabled="disabled"
    >
      <option v-for="{ Bankname, i } in bank" :key="i" :value="Bankname">
        {{ Bankname }}
      </option>
    </select>
  </div>
</template>

<script>
import { isNumber } from '../utils/helpers'
import { getBankList } from '../utils/api'
export default {
  props: {
    type: {
      type: String,
      default: 'text',
      required: true,
    },
    placeholder: {
      type: String,
      default: 'input field',
      required: true,
    },
    select: {
      type: Boolean,
    },
    value: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      default: 11,
    },
    disabled: { type: Boolean },
  },

  data() {
    return {
      inputValue: '',
      bank: [],
    }
  },
  computed: {
    checkIfPhoneOrAccount() {
      return (
        !!this.placeholder.match(/Account/i) ||
        !!this.placeholder.match(/Phone/i) ||
        !!this.placeholder.match(/Amount/i) ||
        !!this.placeholder.match(/passcode/i)
      )
    },
  },

  async created() {
    this.inputValue = this.value
    if (!this.select) return
    const {
      data: { data },
    } = await getBankList()
    this.bank = data
    this.$store.commit('SET_BANK_LIST', data)
  },

  mounted() {
    this.value && this.handleFocus()
    this.$watch('inputValue', (value) => {
      this.handleFocus()
      this.$emit('input', value)
    })
  },
  methods: {
    handleFocus(event) {
      let target
      if (!event) target = this.$refs.input
      else target = event.target
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

    handleInputValue(e) {
      if (!isNumber(e)) return
      const { target } = e,
        charCode = e.which === 46 || e.which === 8 || e.which === 13
      if (target.value.length === this.limit && !charCode) {
        e.preventDefault()
      }
    },
    focusInput() {
      this.handleFocus()
      this.$refs.input.focus()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.float__container {
  border: solid 1px #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 8px;
  padding: 0 8px;
  position: relative;
  width: 300px;
}

.float__input {
  border: none;
  font-size: 20px;
  outline: 0;
  padding: 16px 0 10px;
  width: 100%;
  background: none;
}

select:not(disabled) {
  cursor: pointer;
}

select:disabled {
  cursor: progress;
}

.float__label {
  font-size: 16px;
  color: $pryLabelCol;
  position: absolute;
  transform-origin: top left;
  transform: translate(0, 14px) scale(1);
  transition: all 0.1s ease-in-out;
  cursor: text;
}

.active {
  .float__label {
    transform: translate(0, 0px) scale(0.8);
    color: $activeLabelCol;
    cursor: initial;
  }
}

input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #fff inset;
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
}
</style>
