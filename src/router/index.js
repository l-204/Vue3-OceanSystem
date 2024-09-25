import { createRouter, createWebHistory } from "vue-router";
// import jwt from "jsonwebtoken"; // 用于验证 JWT
import { getToken } from "@/utils/auth"; // 用于获取 token

import homeRoutes from "./routes/home";
import testRoutes from "./routes/test";
import errorRoutes from "./routes/error";
import loginRoutes from "./routes/login";
import userRoutes from "./routes/user";
import settingRoutes from "./routes/setting";
import simpleRoutes from "./routes/simple";
import statisticsRoutes from "./routes/statistics";
import overviewRoutes from "./routes/overview";

// 创建一个路由器实例
const router = createRouter({
  // 使用HTML5历史模式
  history: createWebHistory(),
  routes: [
    ...homeRoutes,
    ...testRoutes,
    ...errorRoutes,
    ...loginRoutes,
    ...userRoutes,
    ...settingRoutes,
    ...simpleRoutes,
    ...statisticsRoutes,
    ...overviewRoutes,
    // 路由不存在时跳转到 404 页面
    {
      path: "/:callAll(.*)",
      name: "notFound",
      redirect: "/404",
      component: () => import("@/views/Error/404.vue"),
    },
  ],
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = getToken();

  // 未登录状态
  if (!token) {
    // 登录页且未登录
    if (to.path === "/login") {
      next(); // 直接前往登录页
    } else {
      // 非登录页且未登录，则重定向至登录页，并带上返回地址
      next({ path: "/login" });
    }
  } else {
    // 用户已登录直接放行
    next();
  }
});

// 导出路由器实例
export default router;
