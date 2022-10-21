import { CaretDownOutlined, createFromIconfontCN } from "@ant-design/icons"
import { Dropdown, Menu } from "antd"
import { Link } from "umi"
import styles from "./index.less"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3645040_df8prq8zvt8.js",
})

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item key="suerInfo">
        <Link to="/user">
          <IconFont type="icon-user" style={{ fontSize: "15px" }} /> 个人资料
        </Link>
      </Menu.Item>
      <Menu.Item key="password">
        <Link to="/user/changePW">
          <IconFont type="icon-editor" style={{ fontSize: "15px" }} /> 修改密码
        </Link>
      </Menu.Item>
      <Menu.Item key="check" onClick={() => this.checkAgain()}>
        <IconFont type="icon-check" style={{ fontSize: "15px" }} /> 设备检测
      </Menu.Item>
      <Menu.Item key="help">
        <Link to="/help">
          <IconFont type="icon-help-new" style={{ fontSize: "15px" }} /> 帮助中心
        </Link>
      </Menu.Item>
      <Menu.Item key="exit" onClick={() => this.logout()}>
        <IconFont type="icon-exit" style={{ fontSize: "15px" }} /> 退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.logo}>听说帮</div>
        </div>
        <div className={styles.right}>
          <div className={styles.myTextbook}>我的课本</div>
          <div className={styles.info}>
            <Dropdown overlay={menu}>
              <div className={styles.dropdown}>
                <div className="name">学生姓名</div>
                <CaretDownOutlined className={styles.icon} />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
