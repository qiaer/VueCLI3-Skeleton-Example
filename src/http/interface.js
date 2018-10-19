import axios from './api'

/* 将所有接口统一管理便于维护
   项目大可将url独立成文件，接口分不同模块
*/

// 单独导出
export const init = params => {
    return axios({
        url: '/init',
        method: 'post',
        params
    })
}
export const mock = params => {
    return axios({
        url: '/mock',
        method: 'get',
        params
    })
}
export const upload = params => {
    return axios({
        url: '/upload',
        method: 'post',
        params
    })
}

// 默认全部导出 根据需要
// export default {
//     init,
//     mock,
//     upload,
// }