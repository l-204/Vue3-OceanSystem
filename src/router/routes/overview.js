export default [
  {
    path: "/overview",
    name: "overview",
    component: () => import("@/views/Overview/index.vue"),
    meta: { breadcrumb: ["首页", "项目概述"] },
  },
];
