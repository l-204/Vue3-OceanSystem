export default [
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/Test/index.vue"),
    meta: { breadcrumb: ["首页", "功能测试"] },
  },
];
