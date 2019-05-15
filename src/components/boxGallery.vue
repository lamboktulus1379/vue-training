<template>
  <div @mouseover="stopSlideImage" @mouseout="slideImage" class="image-wrapper">
    <transition name="fade">
      <img v-if="show" :src="imagePath" width="640" height="480">
    </transition>
    <slot/>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show: true
    };
  },
  props: ["imagePath", "slideImage", "stopSlideImage"]
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 640px;
  height: 480px;
  position: relative;

  span {
    background: #f5f5f5;
    width: 20px;
    font-size: 1.5em;
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    border-radius: 50%;
  }
  span:hover {
    cursor: pointer;
  }

  .lessThan {
    left: 5px;
  }
  .greaterThan {
    right: 5px;
  }
  p {
    width: 100px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    position: absolute;
    bottom: 15px;
    left: 50%;
    color: white;
    padding: 5px 0;
    margin-left: -50px;
    background: rgba(0, 0, 0, 0.5);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
