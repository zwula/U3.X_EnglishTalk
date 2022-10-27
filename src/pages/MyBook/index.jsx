import styles from "./index.less"

const MyBook = (props) => {
  return (
    <div className={styles.myBook}>
      <div className={styles.top}>
        <div className={styles.curBook}>
          <div className={styles.cover} />
          <div className={styles.info}>
            <div className={styles.name}>英语听说练习四川专版</div>
            <div className={styles.grade}>七年级上册</div>
            <div className={styles.checkoutBook}>切换课本</div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className="unitsList" />
      </div>
    </div>
  )
}
export default MyBook
