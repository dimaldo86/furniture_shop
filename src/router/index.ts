import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";

const routes = [

    {
      path: "/",
      name: "main",
      component:Main,
    },


    // {
    //   path: "/about",
    //   name: "about",
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },

  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;