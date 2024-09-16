const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { needAuthentication: true },
      },
      {
        path: "/info",
        component: () => import("pages/InfoPage.vue"),
        meta: { needAuthentication: true },
      },
      {
        path: "/register_property",
        component: () => import("pages/RegisterProperty.vue"),
        meta: { needAuthentication: true },
      },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "signup", component: () => import("pages/SignupPage.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
