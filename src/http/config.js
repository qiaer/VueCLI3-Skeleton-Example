import env from '../config/env'

export default {
    method: 'post',
    // 基础url 前缀
    baseURL: env.baseUrl,
    // 请求头信息
    headers: {
        'Content-Type': 'aplication/json;charset=URF-8'
    },
    // 参数
    data: {},
    // 超时时间
    timeout: 20000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
}