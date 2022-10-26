import { createFromIconfontCN } from "@ant-design/icons"
import { Button, Form, Input, message } from "antd"
import { useState } from "react"
import { connect, history } from "umi"

import { signIn } from "../../../service/login"
import { setStorage } from "../../../utils/storage"
import styles from "./index.less"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3645040_df8prq8zvt8.js",
})

const SignIn = (props) => {
  console.log("props", props)
  // 状态值
  const [errMessage, setErrMessage] = useState("")

  const onFinish = async (values) => {
    console.log("点击登录时接受到的参数", values)
    const { account, password } = values

    // 验证
    if (!account || !account.trim()) {
      setErrMessage("请按照要求填写正确的账号！")
      return
    }
    if (!password || !password.trim()) {
      setErrMessage("请按照要求填写正确的密码！")
      return
    }

    // 如果既填写了账号，又填写了密码，则发起登录请求
    const res = await signIn({ account, password })
    if (res.code == 200) {
      // 将sessionId存储起来进行
      setStorage("sessionId", res.data.sessionId)
      history.push("/myBook")
    } else {
      setErrMessage(res.msg)
    }
  }
  const onFinishFailed = () => {
    message.error("onFinishFailed")
  }

  const { setIsSignIn } = props

  return (
    <div className={styles.signIn}>
      <div className={styles.signInTitle}>账号登录</div>
      <div className={styles.signInContent}>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item name="account" onFinish={onFinish} onFinishFailed={onFinishFailed}>
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

export default connect(({ login }) => ({
  login,
}))(SignIn)
