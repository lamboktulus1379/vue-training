<template>
  <div class="radio">
    <input
      type="radio"
      :value="label"
      :checked="label===value"
      @change="$emit('input', $event.target.value)"
    >
    <label for="male">{{ label }}</label>
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