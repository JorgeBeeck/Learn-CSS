import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import textColor from "../views/textColor.vue";
import backgroundColor from "../views/backgroundColor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/backgroundColor",
    name: "backgroundColor",
    component: backgroundColor,
  },
  {
    path: "/textColor",
    name: "textColor",
    component: textColor,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
