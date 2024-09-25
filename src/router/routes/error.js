export default [
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/Error/index.vue"),
    meta: { breadcrumb: ["首页", "异常处理"] },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/Error/403.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/Error/404.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/Error/500.vue"),
  },
];
