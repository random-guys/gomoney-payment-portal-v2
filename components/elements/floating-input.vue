<template>
  <div id="floatContainer" class="float__container">
    <label for="floatField1" class="float__label">Float Label 1</label>
    <input
      id="floatField1"
      class="float__input"
      type="text"
      data-placeholder=""
      @focus="handleFocus($event)"
      @blur="handleBlur($event)"
    />
  </div>
</template>

<script>
import handleInput from '@/mixins/handleInput.js'

export default {
  mixins: [handleInput],
}
</script>

<style lang="scss" scoped>
.float__container {
  border: solid 1px #ccc;
  box-sizing: border-box;
  margin-bottom: 8px;
  padding: 0 8px;
  position: relative;
  width: 300px;
}

.float__input {
  border: none;
  font-size: 16px;
  outline: 0;
  padding: 16px 0 10px;
  width: 100%;
}

.float__label {
  font-size: 16px;
  position: absolute;
  transform-origin: top left;
  transform: translate(0, 16px) scale(1);
  transition: all 0.1s ease-in-out; //speed
}

.active {
  .float__label {
    transform: translate(0, 4px) scale(0.6);
  }
}
</style>
