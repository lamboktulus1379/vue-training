<template>
  <div class="image-gallery">
    <h3>Gallery</h3>
    <div class="image-wrapper">
      <boxGallery>
        <template v-slot:imageOne>
          <div class="image-wrapper">
            <img src="@/assets/images/boise-downtown-1387405-639x424.jpg" width="640" height="480">
          </div>
        </template>

        <template v-slot:imageTwo>
          <div class="image-wrapper">
            <img src="@/assets/images/chicago-city-1224813-640x480.jpg" width="640" height="480">
          </div>
        </template>

        <template v-slot:imageThree>
          <div class="image-wrapper">
            <img src="@/assets/images/chicago-city-1224822-640x480.jpg" width="640" height="480">
          </div>
        </template>

        <template v-slot:imageFour>
          <div class="image-wrapper">
            <img
              src="@/assets/images/chicago-night-traffic-1447010-640x480.jpg"
              width="640"
              height="480"
            >
          </div>
        </template>
      </boxGallery>
    </div>
  </div>
</template>

<script>
import boxGallery from "../components/boxGallery";

export default {
  data: () => {
    return {};
  },

  components: {
    boxGallery
  },

  methods: {},
  mounted() {}
};
</script>

<style>
</style>