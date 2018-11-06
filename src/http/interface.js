import axios from './api'

/* 将所有接口统一管理便于维护
   项目大可将url独立成文件，接口分不同模块
*/

// 单独导出
export const init = params => {
    return axios({
        url: window._uri_params.init.uri || '/apidata/init',
        method: 'post',
        waitload: false,
        params
    })
}
export const get = params => {
    return axios({
        url: window._uri_params.get.uri || '/apidata/get',
        method: 'post',
        waitload: true,
        params
    })
}

// 默认全部导出 根据需要
// export default {
//     init,
//     get,
//     upload,
// }