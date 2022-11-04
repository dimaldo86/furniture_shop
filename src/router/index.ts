import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [

    {
      path: "/",
      name: "home",
      component:Home,
    },


    {
      path: "/allCollection",
      name: "allCollection",
      // which is lazy-loaded when the route is visited.
      component: () =>import(/* webpackChunkName: "allCollection" */ "../views/AllCollection.vue"),
    },

  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;