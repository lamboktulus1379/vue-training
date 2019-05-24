<template>
  <div class="boxEmployee">
    <p>{{ employeeAddress }}</p>
    <img :src="employeeImage" width="100" height="100">
    <h3>{{ employeeName }}</h3>
  </div>
</template>
<script>
export default {
  props: ["employeeName", "employeeAddress", "employeeImage"]
};
</script>
<style lang="scss" scoped>
.boxEmployee {
  margin: 5px;
  background: #f5f5ff;
  border: 1px solid #ccc;
  h3,
  p {
    text-align: center;
  }
  h3 {
    font-family: "Courier New", Courier, monospace;
  }
  p {
    text-align: center;
  }
}
</style>

