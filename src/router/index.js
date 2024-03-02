import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "../pages/MainComponent.vue";
import BlogComponent from "../pages/BlogComponent.vue";
import BlogDetailsComponent from "../pages/BlogDetailsComponent.vue";
import NotFoundComponent from "../pages/NotFoundComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainComponent,
  },
  {
    path: "/blog/:pageNumber?",
    name: "Blog",
    component: BlogComponent,
  },
  {
    path: "/blogdetails/:id?",
    name: "BlogDetails",
    component: BlogDetailsComponent,
  },
  {
    path: "/footercomponent",
    name: "FooterComponent",
    component: FooterComponent,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
