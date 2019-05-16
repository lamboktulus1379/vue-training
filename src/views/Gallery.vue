<template>
  <div class="image-gallery">
    <h3>Gallery</h3>
    <div class="image-wrapper">
      <boxGallery :slideImage="slideImage" :stopSlideImage="stopSlideImage" :imagePath="imgPath">
        <span @click="leftImage" class="lessThan">&lt;</span>
        <span @click="rightImage" class="greaterThan">&gt;</span>
        <p>{{ imgTitle }}</p>
        <div class="indicator-container">
          <div
            @click="imgShow(index)"
            class="indicator-content"
            :class="{active: cekImage(index)}"
            v-for="(image, index) in imageSource"
            :key="index"
          ></div>
        </div>
      </boxGallery>
    </div>
  </div>
</template>

<script>
import boxGallery from "../components/boxGallery";
import myImageOne from "@/assets/images/boise-downtown-1387405-639x424.jpg";
import myImageTwo from "@/assets/images/chicago-city-1224813-640x480.jpg";
import myImageThree from "@/assets/images/chicago-city-1224822-640x480.jpg";
import myImageFour from "@/assets/images/chicago-night-traffic-1447010-640x480.jpg";

export default {
  data: () => {
    return {
      isActive: false,
      imgPath: myImageOne,
      imgId: 0,
      imgTitle: "My Image 1",
      imageSource: [
        {
          id: 0,
          title: "My Image 1 ",
          name: "boise-downtown-1387405-639x424",
          extension: ".jpg",
          path: myImageOne
        },
        {
          id: 1,
          title: "My Image 2",
          name: "chicago-city-1224813-640x480",
          extension: ".jpg",
          path: myImageTwo
        },
        {
          id: 2,
          title: "My Image 3",
          name: "chicago-city-1224822-640x480",
          extension: ".jpg",
          path: myImageThree
        },
        {
          id: 3,
          title: "My Image 4",
          name: "chicago-night-traffic-1447010-640x480",
          extension: ".jpg",
          path: myImageFour
        }
      ],

      imageHover: false,

      sImage: null
    };
  },

  components: {
    boxGallery
  },

  methods: {
    cekImage(id) {
      if (this.imgId == id) {
        return true;
      }
      return false;
    },
    imgShow(idx) {
      this.stopSlideImage;

      this.imgPath = this.imageSource[idx].path;
      this.imgTitle = this.imageSource[idx].title;
      this.imgId = idx;
    },
    stopSlideImage() {
      clearTimeout(this.sImage);
      this.sImage = null;
    },
    leftImage() {
      this.stopSlideImage;

      this.imgId--;
      if (this.imgId < 0) {
        this.imgId = this.imageSource.length - 1;
      }

      this.imgPath = this.imageSource[this.imgId].path;
      this.imgTitle = this.imageSource[this.imgId].title;
    },
    rightImage() {
      this.stopSlideImage;

      this.imgId++;
      if (this.imgId > this.imageSource.length - 1) {
        this.imgId = 0;
      }

      this.imgPath = this.imageSource[this.imgId].path;
      this.imgTitle = this.imageSource[this.imgId].title;
    },
    slideImage() {
      this.sImage = setInterval(() => {
        this.imgId++;
        if (this.imgId > this.imageSource.length - 1) {
          this.imgId = 0;
        }

        this.imgPath = this.imageSource[this.imgId].path;
        this.imgTitle = this.imageSource[this.imgId].title;
      }, 3000);
    }
  },
  mounted() {
    this.slideImage();
  }
};
</script>

<style>
</style>