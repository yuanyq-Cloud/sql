import Vue from "vue";
import VueRouter from "vue-router";
import HotWord from "../views/HotWord";
import MainUI from "../views/MainUI";
import Taobao from "../views/Taobao";
import Jd from "../views/Jd";
import HotProduct from "../views/HotProduct";
import Guess from "../views/Guess";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainUI,
    children: [
      { name: "MainUI", path: "", redirect: "tb" },
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
  {
    path: "/reg",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
