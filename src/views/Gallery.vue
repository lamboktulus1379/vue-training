<template>
  <div class="image-gallery">
    <h3>Gallery</h3>
    <boxGallery v-for="(image, index) in imageSource" :key="index" src/>
  </div>
</template>

<script>
import boxGallery from "../components/boxGallery";
export default {
  data: () => {
    return {
      imageSource: [
        {
          title: "My Image",
          name: "boise-downtown-1387405-639x424",
          extension: ".jpg",
          path: "../assets/images/boise-downtown-1387405-639x424.jpg"
        },
        {
          title: "My Image",
          name: "chicago-city-1224813-640x480",
          extension: ".jpg",
          path: "../assets/chicago-city-1224813-640x480.jpg"
        },
        {
          title: "My Image",
          name: "chicago-city-1224822-640x480",
          extension: ".jpg",
          path: "../assets/images/chicago-city-1224822-640x480.jpg"
        },
        {
          title: "My Image",
          name: "chicago-night-traffic-1447010-640x480",
          extension: ".jpg",
          path: "../assets/images/bchicago-night-traffic-1447010-640x480.jpg"
        }
      ]
    };
  },

  components: {
    boxGallery
  }
};
</script>

<style>
</style>
