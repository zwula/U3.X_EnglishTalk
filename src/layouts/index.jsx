// 自定义布局文件
// 该项目中，我们没有通过配置使用umi3.x内置的antdPro布局，而采用了使用自定义布局文件

// export default function Layout({ children, location, route, history, match }) {
//   return children
// }

// 可以从props中结构出如下属性  { children, location, route, history, match， disptach }等等

import Footer from "../components/Footer"
import Header from "../components/Header"

import styles from "./index.less"

const showHeader = (props) => {
  // 从所有的路由中查找当前路由，并根据当前路由对象中的 showHeader / showFooter 字段确定是否显示对应组件
  const { route, location } = props
  let curRoute
  if (route && route.routes && route.routes.length > 0) {
    curRoute = route.routes.find((routeItem, routeIndex) => {
      return routeItem.path === location.pathname
    })
  }
  return curRoute.showHeader
}

const showFooter = (props) => {
  const { route, location } = props
  let curRoute
  if (route && route.routes && route.routes.length > 0) {
    curRoute = route.routes.find((routeItem, routeIndex) => {
      return routeItem.path === location.pathname
    })
  }
  return curRoute.showFooter
}

const BasicLayout = (props) => {
  const { children } = props

  const showHeader = (props) => {
    // 从所有的路由中查找当前路由，并根据当前路由对象中的 showHeader / showFooter 字段确定是否显示对应组件
    const { route, location } = props
    let curRoute
    if (route && route.routes && route.routes.length > 0) {
      curRoute = route.routes.find((routeItem, routeIndex) => {
        return routeItem.path === location.pathname
      })
    }
    return (curRoute && curRoute.showHeader) || true
  }

  const showFooter = (props) => {
    const { route, location } = props
    let curRoute
    if (route && route.routes && route.routes.length > 0) {
      curRoute = route.routes.find((routeItem, routeIndex) => {
        return routeItem.path === location.pathname
      })
    }
    return (curRoute && curRoute.showFooter) || true
  }

  return (
    <div className={styles.layout}>
      {showHeader(props) && (
        <div className={styles.header}>
          <Header />
        </div>
      )}
      <div className={styles.main}>{children}</div>
      {showFooter(props) && (
        <div className={styles.footer}>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default BasicLayout
