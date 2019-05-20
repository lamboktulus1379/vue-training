<template>
  <div class="box-education">
    <input
      v-for="(item, key) in value"
      :key="key"
      :placeholder="key"
      @input="$emit('input', updateValue($event,key))"
      type="text"
      :value="value[key]"
    >
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      countEducation: 1,

      temp: {}
    };
  },
  props: [
    "addEducation",
    "ph",
    "tahun",
    "educationsTemp",
    "currentEducation",
    "value"
  ],

  methods: {
    updateValue(e, index) {
      this.temp = this.value;
      this.temp[index] = e.target.value;

      return this.temp;
    }
  },

  mounted() {
    console.log(this.value[Object.keys(this.value)[0]]);
  }
};
</script>

<style lang="scss" scoped>
input {
}
</style>
