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
    {
      path: "/booking/:id",
      name: "booking",
      component: () => import("../pages/BookingView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return savedPosition || { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
