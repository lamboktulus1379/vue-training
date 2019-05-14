<template>
  <div class="boxRegister">
    <div class="form-register">
      <div class="form-content">
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

      <p>{{ value }}</p>
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
.form-register {
  width: 500px;

  .form-content {
    position: relative;
    width: 200px;

    label {
      display: block;
      position: absolute;
      top: 10px;
      left: 5px;
    }

    input {
      font-size: 25px;
      text-align: left;
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