<template>
  <div class="contact">
    <h1>
      <font-awesome-icon icon="address-card"/>Contact
    </h1>

    <ul id="ul-users">
      <li v-for="(item, index) in usersData" :key="index">{{ item.text }}</li>
      <li :title="message">Other information</li>
      <li>Username: {{username}}</li>
    </ul>
    <p>Clicked {{ counter }} times.</p>
    <button @click="Add">Add 1</button>
    <br>
    <form>
      <input @input="username=$event.target.value" type="text" name="username" :value="username">
      <br>
      <input v-model="password" type="password" name="password">

      <input type="submit" value="Send Data">
    </form>

    <p>This is userdata</p>
    <p v-html="`<h1 style='color: red'>changeColor</h1>`">aaa</p>

    <div class="container">
      <div class="content" :class="{active: isActive, isActive: active, 'text-danger': hasError}">
        <p>This is p</p>
      </div>

      <div class="content" :class="{active: isActive, isActive: active, 'text-danger': hasError}">
        <p>This is p</p>
      </div>

      <div
        class="content"
        :style="{border: ['5px solid black'], background: bg}"
        :class="{active: isActive, isActive: active, 'text-danger': hasError}"
      >
        <p>This is p</p>
      </div>
    </div>

    <h2>New Div</h2>
    <div :style="newStyle">
      <p>This is style Object</p>
    </div>

    <button @click="toggleDiv">Change div</button>

    <template>
      <nav>
        <ul>
          <li>
            <span class="icon login"></span> Login
          </li>
          <li>
            <span class="icon tps"></span> TPS Reports
          </li>
          <li>
            <span class="icon twitter"></span> Twitter
          </li>
        </ul>
      </nav>
    </template>
  </div>
</template>
  </div>


</template>
<script>
export default {
  data: () => {
    return {
      usersData: [
        { text: "Lambok Tulus Simamora" },
        { text: "082274140481" },
        { text: "Jl. Brigjen Katamso" }
      ],
      message: "This is message!",
      counter: 0,
      username: "",
      password: "",
      isActive: true,
      hasError: false,
      active: false,
      bg: "red",
      newStyle: {
        width: "100px",
        height: "100px",
        background: "red",
        color: "blue",
        border: "1px solid #ccc"
      }
    };
  },
  methods: {
    Add: function() {
      this.counter++;
    },
    toggleDiv: function() {
      this.active = !this.active;
      this.isActive = !this.isActive;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
nav {
  margin-top: 15px;
}
ul {
  list-style: none;
}
.icon::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.login::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f007";
}

.tps::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  content: "\f1ea";
}

.twitter::before {
  font-family: "Font Awesome 5 Brands";
  content: "\f099";
}
</style>
