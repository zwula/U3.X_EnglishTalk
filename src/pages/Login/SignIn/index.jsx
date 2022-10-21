import { createFromIconfontCN } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { useState } from "react"

import styles from "./index.less"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3645040_df8prq8zvt8.js",
})

const SignIn = (props) => {
  // 状态值
  const [errMessage, setErrMessage] = useState("")

  const onFinish = () => {}
  const onFinishFailed = () => {}

  const { setIsSignIn } = props

  return (
    <div className={styles.signIn}>
      <div className={styles.signInTitle}>账号登录</div>
      <div className={styles.signInContent}>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item name="account">
            <Input
              style={{ height: "40px", borderRadius: "6px" }}
              placeholder="请输入英文账号"
              prefix={
                <IconFont type="icon-username" style={{ color: "#21CA7F", fontSize: "16px" }} />
              }
            />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password
              style={{ height: "40px", borderRadius: "6px" }}
              placeholder="请输入密码"
              prefix={
                <IconFont type="icon-unlock-fill" style={{ color: "#21CA7F", fontSize: "18px" }} />
              }
            />
          </Form.Item>

          <div className={styles.forgetPassword}>忘记密码 ？ 请联系教师重置密码</div>

          {errMessage && <div className={styles.errMessage}>{errMessage}</div>}

          <Form.Item style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                height: "40px",
                width: "100%",
                borderRadius: "6px",
                backgroundColor: "#21CA7F",
                color: "#ffffff",
                border: null,
                fontSize: "18px",
              }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>

        <div
          className={styles.toggleSignUp}
          onClick={() => {
            setIsSignIn(false)
          }}
        >
          还没账号? 马上注册
        </div>
      </div>
    </div>
  )
}

export default SignIn
