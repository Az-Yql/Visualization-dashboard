import axios from 'axios'
import { getToken } from '@/utils/auth'

const request = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/v1',
  timeout: 5000
})

//请求拦截器
request.interceptors.request.use(
  (config) => {
    //将token通过请求头发送给后台
    const token = getToken()
    if(token){
        config.headers.Authorization = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
