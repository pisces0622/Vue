import axios ,{AxiosRequestConfig}  from "axios";

// 引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 封装请求地址
export const serveUrl = 'https://hdf-app-server.penkuoer.com'
const instance = axios.create({
    baseURL: serveUrl,
    timeout: 5000,
    withCredentials: true
})
//   全局拦截器
//添加请求拦截器
instance.interceptors.request.use(config=> {
    const token = sessionStorage.getItem('token')
    // if (token) {
    //     // @ts-ignore
    //     config.headers.token = token
    // }
    NProgress.start()
    return config;
}, error =>  {
    // Do something with request error
    return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(function (response) {
    NProgress.done()
    return response;
}, error => {
    NProgress.done()
    return Promise.reject(error);
});

//   封装请求类型
export const get = (url: any, params: AxiosRequestConfig<any> | undefined) => instance.get(serveUrl + url, params)
export const post = (url: string, params: any) => instance.post(serveUrl + url, params)
export default instance
