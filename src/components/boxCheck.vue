<template>
  <div class="check">
    <input type="checkbox" :value="label" @change="$emit('input', $event.target.value)">
    <label for>{{ label }}</label>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },

  props: ["value", "label"]
};
</script>