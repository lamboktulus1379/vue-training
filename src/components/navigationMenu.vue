<template>
  <nav>
    <ul class="nav-menu">
      <li>
        <router-link :to="link">{{ label }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data: () => {
    return {};
  },

  props: ["label", "link", "display"]
};
</script>
<style lang="scss" scoped>
nav {
  background: blueviolet;
  .nav-menu {
    list-style: none;

    li {
      float: left;
      a {
        text-decoration: none;
        display: block;
        padding: 5px;
        background: rebeccapurple;
        font-size: 1.2em;
        color: white;
        border-left: 2px solid #ccc;
        &.router-link-exact-active {
          background: #42b983;
        }
      }
    }
  }
}
</style>


