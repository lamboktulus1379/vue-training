<template>
  <div class="tabs-container">
    <template>
      <ul class="tabs">
        <li v-for="(item, index) in $slots" :key="index">
          <a class @click="updateId(index)" href="#">{{ capitalizeInitial(index) }}</a>
        </li>
      </ul>
    </template>
    <div class="tabs-wrapper">
      <slot :name="active"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      active: ""
    };
  },
  methods: {
    updateId(slot) {
      this.active = slot;
      //console.log("Current Tab: ", this.active);
    }
  },
  mounted() {
    //console.log(Object.keys(this.$slots)[0]);
    this.active = Object.keys(this.$slots)[0];
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  list-style: none;
  display: flex;
  flex-flow: row;

  li {
    a {
      padding: 5px;
      text-decoration: none;
      background: cornflowerblue;
      color: white;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1.05em;
    }
    a.active {
      background: white;
      color: cornflowerblue;
    }
  }
}
.tabs-wrapper {
  width: 100%;
  margin-top: 4px;
  padding: 5px;
  background: white;

  .tabs-container {
    margin-bottom: 15px;
    .tabs-content div {
      h3 {
        background: cornflowerblue;
      }
    }
    .tabs-content div:nth-child(odd) {
      background: #f5f5f5;
    }
    .tabs-content div:nth-child(even) {
      background: white;
    }
  }
}
</style>
