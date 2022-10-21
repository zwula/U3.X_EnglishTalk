import { useState } from "react"

import styles from "./index.less"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import PrivacyProtocol from "./SignUp/Protocol/privacyProtocol"
import SignUpProtocol from "./SignUp/Protocol/signupProtocol"

const Login = () => {
  // 状态
  const [isSignIn, setIsSignIn] = useState(true)
  const [showSignUpProtocol, setShowSignUpProtocol] = useState(false)
  const [showPrivacyProtocol, setShowPrivacyProtocol] = useState(false)

  return (
    <div className={styles.login}>
      {showSignUpProtocol != true && showPrivacyProtocol != true ? (
        <div>
          <div className={styles.loginTitle}>听说帮</div>
          <div className={styles.loginContent}>
            {isSignIn ? (
              <SignIn setIsSignIn={setIsSignIn} />
            ) : (
              <SignUp
                setIsSignIn={setIsSignIn}
                setShowSignUpProtocol={setShowSignUpProtocol}
                setShowPrivacyProtocol={setShowPrivacyProtocol}
              />
            )}
          </div>
          <div className={styles.info}>
            <div>Copyright 2009-2019 版权所有 明博公司 京ICP备09067472号-20</div>
            <div>京公网安备11010802013475号</div>
          </div>
        </div>
      ) : (
        ""
      )}

      {showSignUpProtocol && <SignUpProtocol setShowSignUpProtocol={setShowSignUpProtocol} />}
      {showPrivacyProtocol && <PrivacyProtocol setShowPrivacyProtocol={setShowPrivacyProtocol} />}
    </div>
  )
}

export default Login
