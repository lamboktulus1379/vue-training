<template>
  <div class="box-email">
    <div class="box-email-wrapper">
      <div class="box-email-content">
        <input
          ref="inputEmail"
          @input="$emit('input', $event.target.value)"
          :value="value"
          required
          autocomplete="off"
          :disabled="placeholder"
        >
        <label :for="label">{{ label }}</label>
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

  props: ["value", "label", "placeholder", "type", "inputDescription"],
  methods: {}
};
</script>
<style lang="scss" scoped>
.box-email-wrapper {
  width: 100%;

  .box-email-content {
    position: relative;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    border-radius: 15px;

    label {
      display: block;
      position: relative;
      top: -20px;
      left: 0px;
      color: #999;
      font-family: "Helvetica", sans-serif;
      font-size: 16px;
      z-index: 1;
      transition: all 0.3s ease-out;
    }

    input {
      display: block;
      position: relative;
      background: none;
      border: none;
      width: 100%;
      font-family: "Helvetica", sans-serif;
      font-weight: bold;
      font-size: 16px;
      z-index: 2;
    }

    input:focus,
    input:valid {
      outline: none;
      border-bottom: 1px solid #00aced;
    }

    input:focus + label,
    input:valid + label {
      top: -40px;
      font-size: 11px;
      color: #00aced;
    }
  }
}
</style>