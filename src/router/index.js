import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "AboutView" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () =>
      import(/* webpackChunkName: "CounterView" */ "../views/CounterView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "UsersView" */ "../views/UsersView.vue"),
  },
  {
    path: "/pokemon-search",
    name: "pokemon-search",
    component: () =>
      import(
        /* webpackChunkName: "PokemonSearchView" */ "../views/PokemonSearchView.vue"
      ),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon-detail",
    component: () =>
      import(/* webpackChunkName: "PokemonView" */ "../views/PokemonView.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "TodoView" */ "../views/TodoView.vue"),
  },
  {
    path: "/custom-slots",
    name: "custom-slots",
    component: () =>
      import(
        /* webpackChunkName: "CustomSlotsView" */ "../views/CustomSlotsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
