import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { getAuth } from "firebase/auth";
import { useUserStore } from "../stores/user";

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    const isAuthenticated = userStore.isAuthenticated;
    console.log("isAuthenticatxxxxed", isAuthenticated);
    if (to.meta.needAuthentication && !isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  });

  return Router;
});
