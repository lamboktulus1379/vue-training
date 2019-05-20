<template>
  <div class="box-email">
    <div class="box-email-wrapper">
      <div @click="toggleFocus" @blur="toggleFocus" class="box-email-content">
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

      this.$refs.inputEmail.focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.box-email-wrapper {
  width: 100%;

  .box-email-content {
    position: relative;
    width: 100%;
    box-sizing: border-box;

    label {
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      background: white;
      border: 1px solid green($color: #000000);
    }

    input {
      box-sizing: border-box;
      text-align: left;
      width: 100%;
      font-size: 1.25em;
      border: none;
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