import { notification } from "antd"
import { history } from "umi"
import { extend } from "umi-request"

import { prefix } from "../service/config"

/** 异常处理程序 */
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
  //   ........ 可以继续添加接口错误信息
}

// 统一的异常处理，供开发者对请求发生的异常做统一处理.
const errorHandler = (error) => {
  const { response } = error
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText
    const { status, url } = response
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    })
  } else if (!response) {
    notification.error({
      description: "网络异常，无法连接服务器",
      message: "网络异常",
    })
  }
  return response
}

//对 extend 实例进行简单的封装
const request = extend({
  // 'params' 是即将于请求一起发送的 URL 参数，参数会自动 encode 后添加到 URL 中
  // 类型需为 Object 对象或者 URLSearchParams 对象
  params: { id: 1 },
  // 'paramsSerializer' 开发者可通过该函数对 params 做序列化（注意：此时传入的 params 为合并了 extends 中 params 参数的对象，如果传入的是 URLSearchParams 对象会转化为 Object 对象
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: "brackets" })
  },
  // 'data' 作为请求主体被发送的数据
  // 适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: { name: "Mike" },

  //  请求头，报文首部-首部字段
  headers: {
    // headers中搭载需要携带的首部信息
    "Content-Type": "application/x-www-form-urlencoded",
    Authentication: localStorage.getItem("token") || "",
  },
  // 'timeout' 指定请求超时的毫秒数（0 表示无超时时间）
  timeout: 3000,
  // 'prefix' 前缀，统一设置 url 请求前缀
  // ( e.g. request('/user/save', { prefix: '/api/v1' }) => request('/api/v1/user/save') )
  prefix: prefix,
  // 'suffix' 后缀，统一设置 url 后缀
  // ( e.g. request('/api/v1/user/save', { suffix: '.json'}) => request('/api/v1/user/save.json') )
  suffix: "",
  // 'credentials' 发送带凭据(cookie)的请求
  // 为了让浏览器发送包含凭据的请求（即使是跨域源），需要设置 credentials: 'include'
  // 如果只想在请求URL与调用脚本位于同一起源处时发送凭据，请添加credentials: 'same-origin'
  // 要改为确保浏览器不在请求中包含凭据，请使用credentials: 'omit'
  credentials: "same-origin", // default
  // 开启CORS跨域
  crossOrigin: true,
  // 'useCache' 是否使用缓存，当值为 true 时，GET 请求在 ttl 毫秒内将被缓存，缓存策略唯一 key 为 url + params 组合
  useCache: false, // default
  // 'ttl' 缓存时长（毫秒）， 0 为不过期
  ttl: 60000,
  // 'maxCache' 最大缓存数， 0 为无限制
  maxCache: 0,
  // 'charset' 当服务端返回的数据编码类型为 gbk 时可使用该参数，umi-request 会按 gbk 编码做解析，避免得到乱码, 默认为 utf8
  // 当 parseResponse 值为 false 时该参数无效
  charset: "gbk",
  // 'responseType': 如何解析返回的数据，当 parseResponse 值为 false 时该参数无效
  // 默认为 'json', 对返回结果进行 Response.text().then( d => JSON.parse(d) ) 解析
  // 其他(text, blob, arrayBuffer, formData), 做 Response[responseType]() 解析
  responseType: "json", // default
  //处理请求错误 调用上面的错误处理逻辑
  errorHandler: errorHandler,
})

// 对实例request进行请求拦截
// 可以在里面对url、option中的参数进行进一步处理
request.interceptors.request.use((url, options) => {
  return {
    options: {
      ...options,
      interceptors: true,
    },
  }
})

// 对实例request进行响应拦截, 统一处理接口错误信息
request.interceptors.response.use(async (response) => {
  if (response.status !== 200) {
    switch (response.status) {
      case 401:
        notification.warn({
          message: "登录超时，请重新登陆!",
        })
        history.push("/login")
        break
    }
  }
  return response
})
