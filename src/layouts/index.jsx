// 布局文件
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
