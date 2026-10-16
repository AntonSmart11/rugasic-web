import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/servicios", name: "Services", component: ServicesView },
  { path: "/proyectos", name: "Proyectos", component: ProjectsView },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
