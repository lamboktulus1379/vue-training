<template>
  <div class="container">
    <template>
      <ul>
        <li>Education</li>
      </ul>
    </template>
    <div class="container">
      <boxEducation v-if="flag===1" v-model="educationsTemp"></boxEducation>
      <div class="ela-5">
        <button v-if="flag===0" @click="addEducation">Add</button>
        <button v-else @click="saveEducation">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import boxEducation from "../components/boxEducation";
export default {
  data: () => {
    return {
      countEducation: 1,
      flag: 0,
      educations: [],

      educationsTemp: { name: "", year: "", major: "", description: "" }
    };
  },
  methods: {
    saveEducation() {
      if (
        this.educationsTemp.name.length > 0 &&
        this.educationsTemp.year.length > 0
      ) {
        this.educations.push(this.educationsTemp);
        this.flag = 0;
      }
    },
    addEducation() {
      this.flag = 1;
    }
  },
  mounted() {},

  components: {
    boxEducation
  }
};
</script>

<style lang="scss" scoped>
</style>
