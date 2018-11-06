
let baseUrl = 'https://easy-mock.com/mock/5bc54e981e3c5836f8687021/mrrw1019'
let routerMode = 'hash'

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://cdn.xxx.com/xxx/'
}

export default{
    baseUrl,
    routerMode,
}