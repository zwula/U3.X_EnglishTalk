import styles from "./index.less"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <div className="copyright">Copyright 2009-2019 版权所有 明博公司 京ICP备09067472号-20</div>
        <div className="recordNo">京公网安备11010802013475号</div>
      </div>
    </div>
  )
}

export default Footer
