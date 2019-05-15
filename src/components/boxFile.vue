<template>
  <div class="box-file">
    <input type="file" multiple @change="$emit('change', $event.target.files[0])">
  </div>
</template>

<script>
export default {
  props: ["val"]
};
</script>

<style>
</style>