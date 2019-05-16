<template>
  <div @mouseover="stopSlideImage" @mouseout="slideImage" class="image-wrapper">
    <img v-if="show" :src="imagePath" width="640" height="480">
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
  position: absulute;
  left: 50%;
  margin-left: -320px;
  width: 640px;
  height: 480px;
  position: relative;
  display: block;
  box-shadow: 2px 2px 3px black;
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

  .indicator-container {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    left: 50%;
    margin-left: -50px;
    position: absolute;
    bottom: 5px;
    width: 100px;
  }
  .indicator-content {
    width: 10px;
    height: 10px;
    background: blue;
    border-radius: 50%;
    box-shadow: 1px 1px 0.5px #f5f5f5;
    transition: "box-shadow" ease-in 2s;
    margin: 5px;
  }
  .indicator-content:hover {
    cursor: pointer;
  }
  .active {
    background: green;
    box-shadow: none;
  }
  img {
    display: block;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    outline: 2px solid #f5f5f5;
  }
  img:hover {
    cursor: pointer;
  }
}
</style>
