<template>
  <div class="image-wrapper">
    <img :src="imagePath" width="640" height="480">
  </div>
</template>

<script>
export default {
  props: ["imagePath"]
};
</script>

<style>
</style>
