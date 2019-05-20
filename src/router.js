import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",

      component: () => import("./views/Contact.vue")
    },
    {
      path: "/employees",
      name: "employees",

      component: () => import("./views/Employees.vue")
    },
    {
      path: "/register",
      name: "register",

      component: () => import("./views/Register.vue")
    },
    {
      path: "/login",
      name: "login",

      component: () => import("./views/Login.vue")
    },
    {
      path: "/menu",
      name: "menu",

      component: () => import("./views/Menu.vue")
    },
    {
      path: "/gallery",
      name: "gallery",

      component: () => import("./views/Gallery.vue")
    },
    {
      path: "/products",
      name: "products",

      component: () => import("./views/Products.vue")
    },
    {
      path: "/quiz",
      name: "quiz",

      component: () => import("./views/Quiz.vue")
    }
  ]
});
