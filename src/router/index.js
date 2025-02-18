import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hotel",
      name: "hotel",
      component: () => import("../pages/HotelView.vue"),
    },
    {
      path: "/hotel/details/:id",
      name: "hotel-details",
      component: () => import("../pages/HotelDetailsView.vue"),
    },
  ],
});

export default router;
