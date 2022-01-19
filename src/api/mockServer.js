// axios 的二次封装
import axios from "axios";
// 引入进度条 start进度条开始 done进度条结束
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 利用axios对象方法create 创建axios实例
const service = axios.create({ // 配置对象
  // 配置基本路径
  baseURL: '/mock',
  // 代表超时事件
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use((config) => {
  nprogress.start();

  // config 里面有个很重要的属性 请求头headersq
  return config;
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 进度结束
    nprogress.done();

    // 返回成功的数据
    return response;
  },
  (error) => {
    // 进度结束
    nprogress.done();

    // 返回一个失败的Promise
    return Promise.reject(new Error('faile', error));
  }
)

// 对外暴露
export default service;
