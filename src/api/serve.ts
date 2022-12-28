import { get,post } from "./requires";
import http from './requires'
// 获取文章列表接口封装
// export const getArticle = (data: any)=>{return get('/doctors?'  data)}
export const getArticle = (data:any)=>{
    return http({
        method:'get',
        url:'/doctors?'+data
    })
}
//科室信息封装
export const keshiApi = (data:any)=>{return get('/doctors/departments',data)}
// 封装上传头像接口
export const txscApi = (data:any)=>{return post('/common/upload',data)}
// 封装注册接口
export const regApi = (data:any)=>{return post('/auth/reg',data)}
//封装登录接口
export const LoginApi = (data:any)=>{return post('/auth/login',data)}
//获取用户信息
export const userApi = (data:any)=>{return get('/members/info',data)}
//封装获取医生信息
// @ts-ignore
export const DoctorApi = (data:any)=>{return get('/doctors/'+data)}
// 关注医生
export const guanzhuApi = (data:any)=>{return post('/members/doctor_collection',data)}
//药品
export const yaopin = (data:any)=>{
    return http({
        method:'get',
        url:'/medicines?'+data
    })
}
