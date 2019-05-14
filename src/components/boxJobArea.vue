<template>
  <div class="box-job-area">
    <ul>
      <li
        @click="$emit('click', $event.target.textContent)"
        v-for="(job, index) in jobs"
        :key="index"
      >{{ job }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      jobExist: true
    };
  },
  props: ["jobs"]
};
</script>

<style lang="scss" scoped>
.box-job-area {
  border: 1px solid #ccc;
  width: 50%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 5px;
      border-bottom: 1px solid #ccc;
    }
    li:hover {
      background: #f5f5f5;
      cursor: pointer;
    }
  }
}
</style>