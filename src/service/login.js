import request from "../utils/request"
import { SIGNIN, SIGNUP } from "./config"

// 登录
export const signIn = (data) => {
  return request.post(SIGNIN, {
    data,
  })
}
// 注册
export const signUp = (data) => {
  return request.post(SIGNUP, {
    data,
  })
}
