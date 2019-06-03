<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Our Team</h3>

    <div :style="boxWrapper">
      <boxContent
        :boxName="p.firstName"
        :boxPrice="p.lastName"
        v-for="(p, index) in teams"
        :key="index"
      ></boxContent>
    </div>
  </div>
</template>
<script>
import boxContent from "../components/boxContent";
import axios from "axios";
export default {
  data: () => {
    return {
      boxWrapper: {
        display: "flex",
        flexWrap: "wrap"
      },

      teams: null,

      boxContainer: {
        width: "300px",
        height: "300px",
        border: "1px solid #ccc",
        background: "green"
      },
      todos: []
    };
  },

  methods: {
    getData() {
      axios
        .get("https://localhost:44346/api/employee")
        .then(res => {
          this.teams = res.data;
          console.log(res);
        })
        .catch(err => {})
        .finally(() => {});
    }
  },

  mounted() {
    this.getData();
  },

  components: {
    boxContent
  }
};
</script>
