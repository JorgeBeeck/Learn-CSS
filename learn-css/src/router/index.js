//uteis
import Vue from "vue";
import VueRouter from "vue-router";

//principalRouters
import Home from "../views/Home.vue";

//toLearnCss
import textColor from "../views/toLearnCss/textColor.vue";
import backgroundColor from "../views/toLearnCss/backgroundColor.vue";
import margin from "../views/toLearnCss/margin.vue";
import border from "../views/toLearnCss/border.vue";

//puzzles - talvez -

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
  {
    path: "/margin",
    name: "margin",
    component: margin,
  },
  {
    path: "/border",
    name: "border",
    component: border,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
