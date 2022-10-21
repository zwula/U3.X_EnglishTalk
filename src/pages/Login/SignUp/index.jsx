import { Button, Checkbox, Form, Input } from "antd"
import { useState } from "react"

import styles from "./index.less"

const SignUp = (props) => {
  // 状态
  const [isAgree, setIsAgree] = useState(true)
  const [errMessage, setErrMessage] = useState("")

  const onFinish = () => {}
  const onFinishFailed = () => {}

  const { setIsSignIn, setShowPrivacyProtocol, setShowSignUpProtocol } = props
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpTitle}>账号注册</div>
      <div className={styles.signUpContent}>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "350px" }}
        >
          <Form.Item name="account">
            <Input
              style={{ height: "40px", borderRadius: "6px" }}
              placeholder="请输入英文账号 ( 6个字母以上 )"
            />
          </Form.Item>
          <Form.Item name="username">
            <Input style={{ height: "40px", borderRadius: "6px" }} placeholder="请输入学生姓名" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              style={{ height: "40px", borderRadius: "6px" }}
              placeholder="请设置8-20位密码，包含数字、字母、特殊符号"
            />
          </Form.Item>
          <Form.Item name="classNum">
            <Input
              style={{ height: "40px", borderRadius: "6px" }}
              placeholder="请输入班级编号 ( 选填 )"
            />
          </Form.Item>

          <Checkbox
            style={{ fontSize: "10px" }}
            checked={isAgree}
            onChange={() => {
              setIsAgree(!isAgree)
            }}
          >
            我同意
            <a
              style={{ fontSize: "10px" }}
              onClick={() => {
                setShowSignUpProtocol(true)
              }}
            >
              《听说帮注册协议》
            </a>
            和
            <a
              style={{ fontSize: "10px" }}
              onClick={() => {
                setShowPrivacyProtocol(true)
              }}
            >
              《听说帮隐私保护协议》
            </a>
          </Checkbox>

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
              注册
            </Button>
          </Form.Item>
        </Form>

        <div
          className={styles.toggleSignIn}
          onClick={() => {
            setIsSignIn(true)
          }}
        >
          已有账号,去登录
        </div>
      </div>
    </div>
  )
}

export default SignUp
