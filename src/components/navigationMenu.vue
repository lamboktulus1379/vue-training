<template>
  <div class="navigation">
    <li>
      <router-link :to="link">{{ label }}</router-link>
    </li>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },

  props: ["label", "link", "display"]
};
</script>
<style lang="scss" scoped>
</style>


