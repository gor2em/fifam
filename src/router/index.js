import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/league/:id",
    name: "LeagueDetail",
    component: () => import(/*webPackChunkName:"league-detail"*/ "@/views/LeagueDetail.vue"),
  },
  {
    path: "/league/create",
    name: "CreateLeague",
    component: () => import(/*webPackChunkName:"league-detail"*/ "@/views/CreateLeague.vue"),
  },
  {
    path: "/league/update/:id",
    name: "UpdateLeague",
    component: () => import(/*webPackChunkName:"league-detail"*/ "@/views/UpdateLeague.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/layout/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
    ],
  },

  {
    name: "NotFound",
    path: "/:patchMatch(.*)*",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["CreateLeague", "UpdateLeague"];
  const authNotRequiredRoutes = ["Login"];

  const _isAuth = store.getters._isAuth;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuth) {
    next(false);
  }

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuth) {
      const _isAdmin = store.getters._user.isAdmin;
      if (_isAdmin) next();
      else next({ name: "Home" });
    } else next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
