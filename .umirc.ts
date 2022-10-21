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
  proxy: {
    "/api": {
      target: "https://entalk.myuclass.com", // 正式线上地址
      // target: 'http://172.16.1.88:8080',  // 测试地址
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
})
