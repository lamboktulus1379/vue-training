<template>
  <div id="app">
      <navigationMenu v-for="(menu, index) in menus" :key="index" :label="menu.name" :link="menu.link">  
    </navigationMenu>
    <router-view/>    
  </div>
</template>
<script>
import navigationMenu from '@/components/navigationMenu'
export default {
  data: () => {
        return {
            menus: [
                {name: "Home", link: "/", id: 1},
                {name: "Contact", link: "/contact", id: 2},
                {name: "About", link: "/about", id: 3},                
                {name: "Employees", link: "/employees", id: 4},
                {name: "Login", link: "/login", id: 5},
            ],
            loadAPI: false
        }
    },
    components: {
        navigationMenu,
    }
}
</script>


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
