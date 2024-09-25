export default [
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/User/index.vue"),
    meta: { breadcrumb: ["首页", "个人中心"] },
  },
];
