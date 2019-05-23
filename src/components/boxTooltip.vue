<template>
  <div class="tooltip-container">
    <div class="tooltip">{{ tooltip }}</div>
    <slot/>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: ["tooltip"]
};
</script>

<style lang="scss" scoped>
.tooltip-container {
  .tooltip {
    display: none;
  }
  &:hover {
    .tooltip {
      display: block;
      position: absolute;
      top: -30px;
      width: 100px;
      left: 0;
      background: #f5f5f5;
      color: black;
      border-radius: 15px;
      padding: 2.5px;
      font-size: 0.75em;
      text-align: center;
      z-index: 1111;
    }
  }
}
</style>
