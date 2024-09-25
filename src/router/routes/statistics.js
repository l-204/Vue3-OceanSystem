export default [
  {
    path: "/statistics",
    name: "statistics",
    component: () => import("@/views/Statistics/index.vue"),
    meta: { breadcrumb: ["首页", "数据统计"] },
  },
];
