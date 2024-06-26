import Cookies from 'js-cookie'

//token常量(易维护)
const TOKEN_KEY = 'token'

//读取token


export const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

//设置token

export const setToken = (value) => {
  Cookies.set(TOKEN_KEY, value)
}

//清空token

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY)
}
