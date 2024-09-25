export default [
  {
    path: "/simple",
    name: "simple",
    component: () => import("@/views/Simple/index.vue"),
    meta: { breadcrumb: ["首页", "样本管理"] },
    // children: [
    //   {
    //     path: "a",
    //     name: "simple-a",
    //     component: () => import("@/views/Simple/A.vue")
    //   },
    //   {
    //     path: "b",
    //     name: "simple-b",
    //     component: ()=> import("@/views/Simple/B.vue")
    //   },
    //   {
    //     path: "c",
    //     name: "simple-c",
    //     component: () => import("@/views/Simple/C.vue")
    //   }
    // ]
  },
];
