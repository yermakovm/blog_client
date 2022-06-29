import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import LoginPage from "@/Pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
