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
      routes: [{ exact: true, path: "/", component: "@/pages/index" }],
    },
  ],
  fastRefresh: {},
})
