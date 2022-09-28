import axios from 'axios'
import { useUserStore } from '@/stores/user'
// import router from '@/router'

// 建立一個新的axios實體(複製原本的axios)。修改他原本設定
// baseURL會再請求的網址修改設定
export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

// import.meta.env.VITE_API 是.env裡面的http://localhost:4000 (VITE_API=http://localhost:4000)

// 攔截器 ----------------------------------------
// ----------------------------------------------
// axios --> axios攔截器請求request --> api --> axios攔截器回應response --> 呼叫的地方
// 客戶端向後端出示 API Token 的方式(放在 HTTP Header 裡面)
// 將請求添加uer.token來做驗證
export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})
// 使用 axios.interceptors 對請求做前處理 ----->
// config 配置(改寫) // authorization 授權

apiAuth.interceptors.request.use(
  function (config) {
    // Do something before request is sent (在發送請求之前做一些事情)
    // 我們要補上使用者的token，帶入到 headers 當中
    const user = useUserStore()
    config.headers.authorization = `Bearer ${user.token}`
    return config
    // 要存取某 API 時，若要身份驗證則在 JWT 前面加上字符串 Bearer 再放到 HTTP 請求的 Header 中，這個值就是 Bearer Token
  },
  // Do something with request error
  (error) => Promise.reject(error)
)

apiAuth.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    // 如果有請求回應
    if (error.response) {
      // 如果是401可能是JWT過期
      if (error.response.status === 401) {
        // 確認原始請求的網址不延長登入，才重新登入
        if (error.config.url !== '/users/extend' && error.config.url !== '/users/logout') {
          const user = useUserStore()
          return apiAuth.post('/users/extend', {}).then(({ data }) => {
            // 更新 JWT
            user.token = data.result
            // 使用新的JWT 再次嘗試原始請求
            error.config.headers.authorization = `Bearer ${user.token}`
            return axios(error.config)
          }).catch((error) => {
            // 重新登入失敗。強制登出
            user.logout()
            // 回傳延長登入請求錯誤訊息到呼叫的地方
            return Promise.reject(error)
          })
        }
      }
    }
    return Promise.reject(error)
  })
