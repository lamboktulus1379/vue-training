<template>
  <div class="box-password">
    <div class="box-password-wrapper">
      <div @click="toggleFocus" @blur="toggleFocus" class="box-password-content">
        <label :class="{focus: isFocus, noFocus: isNotFocus}" :for="label">{{ label }}</label>
        <input
          ref="inputEmail"
          @input="$emit('input', $event.target.value)"
          :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
          :value="value"
          autocomplete="false"
          :disabled="placeholder"
        >
        {{ inputDescription }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isNotFocus: true,
      isFocus: false,

      isFocusInput: false,
      isNotFocusInput: true
    };
  },

  props: [
    "value",
    "label",
    "placeholder",
    "type",
    "inputDescription",
    "name",
    "checked"
  ],
  methods: {
    toggleFocus: function() {
      if (this.value.length < 1) {
        this.isNotFocus = !this.isNotFocus;
        this.isFocus = !this.isFocus;

        this.isFocusInput = !this.isFocusInput;
        this.isNotFocusInput = !this.isNotFocusInput;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box-password-wrapper {
  width: 100%;

  .box-password-content {
    position: relative;
    width: 100%;
    box-sizing: border-box;

    label {
      display: block;
      position: absolute;
      top: 3px;
      left: 5px;
      border: 1px solid green($color: #000000);
      transition: top ease-in 0.5s;
      background: #f5f5f5;
      padding: 0 5px;
    }

    input {
      box-sizing: border-box;
      text-align: left;
      width: 100%;
      height: 100%;
      background: #f5f5f5;
      font-size: 1.25em;
      border: none;
      outline: none;
    }

    .focus {
      top: -15px;
    }

    .focusInput {
      color: black;
      outline: none;
    }
  }
}
</style>