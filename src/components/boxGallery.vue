<template>
  <div class="image-wrapper">
    <img
      :src="image.path"
      v-for="(image, index) in imageSource"
      :key="index"
      width="640"
      height="480"
    >
  </div>
</template>

<script>
export default {
  props: ["imageSource"]
};
</script>

<style>
</style>
