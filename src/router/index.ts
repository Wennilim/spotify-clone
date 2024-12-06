import { createRouter, createWebHistory } from "vue-router";
import AllView from "../pages/index.vue";
import CategoryView from "../pages/categories/[id].vue";
import NotFoundView from "../pages/[...path].vue";
import Content from "../components/Content.vue";
import Download from "../pages/Download.vue";
import Search from "../pages/Search.vue";


const routes = [
  {
    path: "/",
    component: Content,
    children: [
      { path: "", component: AllView },
    ],
  },
  {
    path: "/categories/:id",
    component: CategoryView,
  },
  {
    path: "/download",
    component: Download,
  },
  {
    path: "/notifications",
    component: Download,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
