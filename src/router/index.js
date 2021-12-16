import Vue from "vue";
import VueRouter from "vue-router";
import Taobao from "../views/Taobao";
import HotWord from "../views/HotWord";
import Main from "../views/Main";
import Login from "../views/Login";
import Jd from "../views/Jd";
import HotProduct from "../views/HotProduct";
import Guess from "../views/Guess";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      { path: "", redirect: "tb" },
      { path: "tb", component: Taobao },
      { path: "jd", component: Jd },
      { path: "hw", component: HotWord },
      { path: "hp", component: HotProduct },
      { path: "g", component: Guess },
    ],
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
