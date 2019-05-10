<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/employees">Employess</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#ul-users {
  li {
    list-style-type: none;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 5px;
  }
}

.active {
  height: 100px;
  width: 100px;
  border: 1px solid #ccc;
  background: blue;
  p {
    color: white;
  }
}

.container {
  width: 800px;
  flex-direction: row;
  display: flex;
}
.content {
  margin: 10px;
}

.isActive {
  height: 100px;
  float: left;
  width: 100px;
  border: 1px solid #ccc;
  background: white;
  p {
    color: blue;
  }
}
</style>
