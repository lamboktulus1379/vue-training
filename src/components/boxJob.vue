<template>
  <div class="box-job">
    <input
      type="text"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :value="val"
    >
  </div>
</template>

<script>
export default {
  date: () => {
    return {};
  },

  props: ["placeholder", "val"]
};
</script>
<style lang="scss" scoped>
.box-job {
  input {
    width: 50%;
    padding: 5px;
    font-size: 1.05em;
  }
}
</style>
