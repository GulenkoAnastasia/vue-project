import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/Details.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
