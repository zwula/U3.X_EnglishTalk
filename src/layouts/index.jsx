// 自定义布局文件
// 该项目中，我们没有通过配置使用umi3.x内置的antdPro布局，而采用了使用自定义布局文件

// export default function Layout({ children, location, route, history, match }) {
//   return children
// }

// 可以从props中结构出如下属性  { children, location, route, history, match， disptach }等等

import Footer from "../components/Footer"
import Header from "../components/Header"

import styles from "./index.less"

const BasicLayout = (props) => {
  const { children } = props
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default BasicLayout
