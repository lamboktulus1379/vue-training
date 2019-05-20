<template>
  <div class="container">
    <boxTabs>
      <template v-if="isActive===0" #education>
        <div class="tabs-container">
          <h1>Education</h1>
          <template>
            <div class="tabs-content">
              <div v-for="(item, index) in educations" :key="index">
                <h3>{{ "Education: "}} {{ index + 1}}</h3>
                <p v-for="(prop, keys) in item" :key="keys">
                  {{ keys.charAt(0).toUpperCase() + keys.substr(1) + ": "}}
                  {{ prop }}
                </p>
              </div>
            </div>
          </template>
          <template>
            <div class="tabs-add">
              <boxEducation v-if="flag===1" v-model="educationsTemp"></boxEducation>
              <div class="ela-5">
                <button v-if="flag===0" @click="addEducation">Add</button>
                <button v-else @click="saveEducation">Save</button>
              </div>
            </div>
          </template>
        </div>
      </template>

      <template v-slot:experience>
        <div class="tabs-content">
          <boxExperience></boxExperience>
        </div>
      </template>

      <template v-slot:unnamed>
        <div class="tabs-content">
          <boxUnnamed></boxUnnamed>
        </div>
      </template>

      <template v-slot:unnamed2>
        <div class="tabs-content">
          <h1>Unnamed 2</h1>
        </div>
      </template>
    </boxTabs>
  </div>
</template>

<script>
import boxTabs from "../components/boxTabs";
import boxEducation from "../components/boxEducation";
import boxExperience from "../components/boxExperience";
import boxUnnamed from "../components/boxUnnamed";
export default {
  data: () => {
    return {
      countEducation: 1,
      isActive: 0,
      flag: 0,
      educations: [],

      educationsTemp: { name: "", year: "", major: "", description: "" }
    };
  },
  methods: {
    cekId($event) {},
    updateId(id) {
      this.isActive = id;
    },
    saveEducation() {
      if (
        this.educationsTemp.name.length > 0 &&
        this.educationsTemp.year.length > 0 &&
        this.educationsTemp.major.length > 0 &&
        this.educationsTemp.description.length > 0
      ) {
        this.educations.push(this.educationsTemp);
        this.flag = 0;

        this.educationsTemp = {
          name: "",
          year: "",
          major: "",
          description: ""
        };
      }
    },
    addEducation() {
      this.flag = 1;
    }
  },
  mounted() {},

  components: {
    boxTabs,
    boxEducation,
    boxExperience,
    boxUnnamed
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
