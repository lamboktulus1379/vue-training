<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Our Team</h3>

    <div :style="boxWrapper">
      <boxContent
        :boxName="p.FirstName"
        :boxPrice="p.LastName"
        v-for="(p, index) in teams"
        :key="index"
      ></boxContent>
    </div>

    <h3>Basic Counter</h3>
    <div class="counter-demo">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
    <div class="divider"></div>
    <h3>Multiple Counter</h3>
    <div class="multiple-counter-demo">
      <section>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </section>
      <section>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </section>
      <section>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </section>
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
          console.log(res.data);
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

<style lang="scss" scoped>
.divider {
  display: block;
  clear: both;
  margin-top: 15px;
}
.counter-demo {
  counter-reset: pages;
  display: block;

  a {
    counter-increment: pages;

    &::before {
      content: counter(pages);
    }
  }

  a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: left;
    background: #ccc;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
}
.multiple-counter-demo {
  counter-reset: sections boxes;
}
section {
  counter-increment: sections;
  display: flex;
  &::before {
    content: "Section " counter(sections);
  }

  .box {
    counter-increment: boxes;
    height: 30px;
    width: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.5px;

    &::before {
      content: counter(boxes, upper-roman);
    }
  }
}
</style>

