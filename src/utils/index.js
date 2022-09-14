/**
 * 判断是否为null
 * @param {*} parameter
 */
export const isNull = (parameter) => {
  if (isUndefined(parameter)) return true
  if (parameter === null) return true
  if (isObject(parameter)) {
    if (Object.keys(parameter).length === 0) return true
  }
  if (isArray(parameter)) {
    if (parameter.length === 0) return true
  }
  return false
}

/**
 * 判断是否为undefined
 * @param {*} parameter
 */
export const isUndefined = (parameter) => {
  return parameter === void 0
}

/**
 * 判断是否为布尔值
 * @param {*} parameter
 */
export const isBoolean = (parameter) => {
  return (
    parameter === true || parameter === false || toString.call(parameter) === "[object Boolean]"
  )
}

/**
 * 判断是否为数字
 * @param {*} parameter
 */
export const isNumber = (parameter) => {
  return toString.call(parameter) === "[object Number]"
}

/**
 * 判断是否为字符串
 * @param {*} parameter
 */
export const isString = (parameter) => {
  return toString.call(parameter) === "[object String]"
}

/**
 * 判断是否为对象，不包括null
 * @param {*} parameter
 */
export const isObject = (parameter) => {
  const type = typeof parameter
  return type === "function" || (type === "object" && !!parameter)
}

/**
 * 判断是否为数组
 * @param {*} parameter
 */
export const isArray = (parameter) => {
  return toString.call(parameter) === "[object Array]"
}

/**
 * 判断是否为日期类型
 * @param {*} parameter
 */
export const isDate = (parameter) => {
  return toString.call(parameter) === "[object Date]"
}

/**
 * 对象转查询字符串
 * {name:'二胖', age:22} => name=二胖&age=22
 * @param {*} params
 */
export const objToSearch = (params) => {
  let result = ""
  for (let key in params) {
    ;(params[key] === 0 || params[key]) && (result += `${key}=${params[key]}&`)
  }
  return result && result.slice(0, result.length - 1)
}

/**
 * 操作cookie
 */
export const cookie = {
  get: (key) => {
    const cookieStr = document.cookie
    const map = new Map()
    cookieStr.split("; ").forEach((item) => {
      map.set(item.split("=")[0], item.split("=")[1])
    })
    return decodeURIComponent(map.get(key))
  },
  set: (key, value) => {
    document.cookie = key + "=" + encodeURIComponent(value)
  },
  remove: (key) => {
    document.cookie = key + "=0;expire=" + new Date().toUTCString()
  },
}
