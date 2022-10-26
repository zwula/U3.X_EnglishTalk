// 定义各个接口 - 【魔法字符串】

let prefix

if (process.env.NODE_ENV == "development") {
  prefix = "/api"
} else if (process.env.NODE_ENV == "production") {
  prefix = ""
}

const SIGNIN = `${prefix}/v1/login`
const SIGNUP = `${prefix}/v1/user/register`

export { prefix, SIGNIN, SIGNUP }
