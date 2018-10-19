
// let baseUrl = 'http://hs.qudu99.com'
let  baseUrl = 'https://easy-mock.com/mock/5bc54e981e3c5836f8687021/skeletonExample'
let routerMode = 'hash'
let hostUrl = 'http://gd.qudu99.com'


if (process.env.NODE_ENV === 'delelopment') {
    // baseUrl = 'https://easy-mock.com/mock/5bc54e981e3c5836f8687021/skeletonExample'
    baseUrl = 'https://easy-mock.com/mock/5ad75e9f41d4d65f0e935be4/example'
}else if (process.env.NODE_ENV === 'production') {
    
}

export default{
    hostUrl,
    baseUrl,
    routerMode,
}