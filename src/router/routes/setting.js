export default [
  {
    path: "/setting",
    name: "settingPage",
    component: () => import("@/views/Setting/index.vue"),
    meta: { breadcrumb: ["首页", "系统设置"] },
  },
];
