import styles from "./index.less"

const PrivacyProtocol = (props) => {
  const { setShowPrivacyProtocol } = props
  return (
    <div className={styles.signUpProtocol}>
      <div className={styles.signUpProtocolTitle}>听说帮</div>
      <div className={styles.signUpProtocolContent}>
        <div className={styles.text}>
          <h3 style={{ textAlign: "center" }}>听说帮用户隐私保护协议</h3>
          <p>
            1.保护用户(特别是未成年人)
            的隐私是的一项基本政策，因此，若父母(监护人)希望未成年人(尤其是十岁以下子女)得以使用本服务，必须以父母(监护人)名义申请注册，在接受本服务时，应以法定监护人身份加以判断本服务是否符合于未成年人。我们保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在的非公开内容，但下列情况除外：
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)事先获得用户的明确授权；</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)根据有关的法律法规要求；</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3)按照相关政府主管部门的要求；</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(4)为维护社会公众的利益；</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5)为维护的合法权益。</p>
          <p>
            2.我们可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与同等的保护用户隐私的责任，则可将用户的注册资料等提供给该第三方。
          </p>
          <p>
            3.在不透露单个用户隐私资料的前提下，有权对整个用户数据库进行技术分析并对已进行分析、整理后的用户数据库进行商业上的利用。尽管对用户的隐私权保护做了极大的努力，但是仍然不能保证现有的安全技术措施使用户的技术信息等不受任何形式的损失。
          </p>
          <p>
            我们将采取商业上合理的方式以保护您的个人资料的安全。我们将使用通常可以获得的安全技术和程序来保护您的个人资料不被未经授权的访问、使用或泄漏。对于非因我们的疏忽而造成您账号的丢失或您个人资料的泄密，我们不承担任何责任。
          </p>
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setShowPrivacyProtocol(false)
          }}
        >
          返回
        </div>
      </div>
      <div className={styles.info}>
        <div>Copyright 2009-2019 版权所有 明博公司 京ICP备09067472号-20</div>
        <div>京公网安备11010802013475号</div>
      </div>
    </div>
  )
}

export default PrivacyProtocol
