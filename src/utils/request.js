import axios from 'axios'
// 定义请求模块
const request = axios.create({
  baseURL: 'https://www.escook.cn'
})

export default request
