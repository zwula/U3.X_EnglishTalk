import { defineConfig } from "umi"

export default defineConfig({
  title: "听说帮自研版",
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
          showHeader: false,
          showFooter: false,
        },
        // 首页
        {
          exact: true,
          path: "/myBook",
          component: "@/pages/MyBook",
          showHeader: true,
          showFooter: true,
        },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    // 使用代理解决跨域问题
    "/api": {
      target: "https://entalk.myuclass.com", // 正式线上地址
      // target: 'http://172.16.1.88:8080',  // 测试地址
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
})
