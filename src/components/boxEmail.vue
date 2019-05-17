<template>
  <div class="box-email">
    <div class="box-email-wrapper">
      <div class="box-email-content">
        <label
          @click="toggleFocus"
          :class="{focus: isFocus, noFocus: isNotFocus}"
          :for="label"
        >{{ label }}</label>
        <input
          @input="$emit('input', $event.target.value)"
          :checked="checked"
          @blur="toggleFocus"
          @focus="toggleFocus"
          :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
          :id="label"
          :value="value"
          :type="type"
          autocomplete="false"
          :name="name"
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
      this.isNotFocus = !this.isNotFocus;
      this.isFocus = !this.isFocus;

      this.isFocusInput = !this.isFocusInput;
      this.isNotFocusInput = !this.isNotFocusInput;
    }
  }
};
</script>
<style lang="scss" scoped>
.box-email-wrapper {
  width: 500px;

  .box-email-content {
    position: relative;
    width: 200px;

    label {
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
    }

    input {
      text-align: left;
      width: 100%;
      outline: 1px solid green($color: #000000);
      border: none;
      outline: none;
      color: white;
    }

    .focus {
      top: -10px;
    }

    .focusInput {
      color: black;
    }
  }
}
</style>