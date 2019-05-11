<template>
  <div class="users">
    <h1>This is an about Employees</h1>
    <h3>Our Employees</h3>
    <p v-if="$store.getters.getLog">You've logged in</p>
    <loading v-if="loadAPI"></loading>
    <div :style="employeeWrapper">
      <boxContent
        v-for="(employee, index) in employeees"
        :key="index"
        :employeeAddress="employee.id"
        :employeeImage="employee.thumbnailUrl"
        :employeeName="employee.title"
      ></boxContent>
    </div>
  </div>
</template>
<script>
import navigationMenu from "../components/navigationMenu";
import boxContent from "../components/boxEmployee";
import loading from "../components/Loading";

import axios from "axios";

export default {
  data: () => {
    return {
      employeeWrapper: {
        display: "flex",
        flexWrap: "wrap"
      },

      employeees: [],

      boxContainer: {
        width: "300px",
        height: "300px",
        border: "1px solid #ccc",
        background: "green"
      },
      todos: [],
      loadAPI: false
    };
  },

  components: {
    boxContent,
    navigationMenu,
    loading
  },

  mounted() {
    (this.loadAPI = true),
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(data1 => {
          this.employeees = data1.data;
        })
        .catch(error => {})
        .finally(() => {
          this.loadAPI = false;
        });
  }
};
</script>
