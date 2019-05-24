<template>
  <div @mouseover="stopSlideImage" @mouseout="slideImage" class="image-wrapper">
    <template>
      <div class="box-gallery"></div>
    </template>
    <template>
      <div class="image-button">
        <span @click="leftImage" class="lessThan">&lt;</span>
        <span @click="rightImage" class="greaterThan">&gt;</span>
        <p>{{ slotActive }}</p>
        <div class="indicator-container">
          <div
            @click="updateImage(key)"
            class="indicator-content"
            :class="{active: cekImage(key)}"
            v-for="(image, key) in $slots"
            :key="key"
          ></div>
        </div>
      </div>
    </template>
    <template>
      <div class="image-content">
        <slot :name="slotActive"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show: true,
      imgId: 0,
      slotActive: "imageOne",
      slotName: ["imageOne", "imageTwo", "imageThree", "imageFour"]
    };
  },
  props: [],
  methods: {
    cekImage(key) {
      if (this.slotActive == key) {
        return true;
      }
      return false;
    },
    updateImage(key) {
      this.slotActive = key;
    },
    stopSlideImage() {
      clearTimeout(this.sImage);
    },
    leftImage() {
      this.stopSlideImage;

      if (this.imgId > 0) {
        this.imgId--;
      } else {
        this.imgId = 3;
      }

      this.slotActive = this.slotName[this.imgId];
    },
    rightImage() {
      this.stopSlideImage;

      if (this.imgId < 3) {
        this.imgId++;
      } else {
        this.imgId = 0;
      }
      this.slotActive = this.slotName[this.imgId];
    },
    slideImage() {
      this.sImage = setInterval(() => {
        if (this.imgId < 3) {
          this.imgId++;
        } else {
          this.imgId = 0;
        }

        this.slotActive = this.slotName[this.imgId];
      }, 3000);
    }
  },
  mounted() {
    this.slideImage();
  }
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: absolute;
  left: 50%;
  margin-left: -320px;
  width: 640px;
  height: 480px;
  position: relative;
  display: block;
  box-shadow: 2px 2px 3px black;

  .image-button {
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
      z-index: 1000;
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
      bottom: 25px;
      left: 50%;
      color: white;
      z-index: 1000;
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
      z-index: 1000;
    }
    .indicator-content {
      width: 10px;
      height: 10px;
      background: #5dbcd2;
      border-radius: 50%;
      box-shadow: 1px 1px 0.5px #f5f5f5;
      transition: "box-shadow" ease-in 2s;
      margin: 5px;
    }
    .indicator-content:hover {
      cursor: pointer;
    }
    .active {
      background: #5e12c6;
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
      transform: scale(1.5);
    }
  }
}
</style>
