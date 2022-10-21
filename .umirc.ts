import { defineConfig } from "umi"

export default defineConfig({
  nodeModulesTransform: {
    type: "none",
  },
  routes: [
    {
      path: "/",
      component: "@/layouts",
      // routes中的组件自动会成为layouts的children进行渲染
      routes: [
        // 注册
        // 登录
        {
          path: "/login",
          component: "@/pages/Login",
        },
        // 首页
        { exact: true, path: "/", component: "@/pages/index" },
      ],
    },
  ],
  fastRefresh: {},
})
