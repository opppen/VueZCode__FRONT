import { defineStore } from 'pinia'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
/*
在pinia的方式寫 useRuter ()會是undefined（例如拿views/front/RegisterView.vue裡面router跳頁方式)
import { useRouter } from 'vue-router'
*/
import router from '@/router/index.js'

// 放前台會使用到的使用者資料
export const useUserStore = defineStore({
  id: 'user',
  // state表示資料，目前整個應用程式的資料狀態
  state () {
    return {
      _id: '',
      token: '',
      account: '',
      email: '',
      role: false,
      cart: 0
    }
  },
  getters: {
    // 判斷登入(透過token的長度不等於0->token有內容就登入)
    isLogin () {
      return this.token.length !== 0
    },
    // 判斷管理員(role=1就是管理職)
    isAdmin () {
      return this.role === true
    },
    // 大頭貼產生器(隨機透過名字產生)
    avatar () {
      return 'https://source.boringavatars.com/beam/120/' + this.account
    }
  },
  actions: {
    async login (form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.email = data.result.email
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
        await Swal.fire({
          // icon: 'success',
          title: 'SUCCESS //成功',
          text: '登入成功'
        })
        router.push('/')
      } catch (error) {
        Swal.fire({
          // icon: 'error',
          title: 'ERROR //登入失敗',
          // Axios發生錯誤而且有拿到資料的話 就顯示 error.response.data.message 否則是顯示'發生錯誤'
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    },
    async logout () {
      try {
        // 原本沒有做攔截器的時候寫法 --------

        // await api.delete('/users/logout', {
        //   headers: {
        //     // 請求登出(刪除使用者)前的時候加上JWT
        //     authorization: `Bearer ${this.token}`
        //   }
        // })

        // 原本沒有做攔截器的時候寫法 --------
        // apiAuth是原本的api headers補上user.token了
        // router.delete('/logout', auth.jwt, logout)
        await apiAuth.delete('/users/logout')
        router.push('/')
        await Swal.fire({
          // icon: 'success',
          title: 'SUCCESS //成功',
          text: '登出成功'
        })
        // 回首頁
      } catch (_) {
        // 不做錯誤處理了
      }
      // 登出完成後資料清空
      this.token = ''
      this.email = ''
      this.account = ''
      this.role = false
      this.cart = 0
    },
    // 加入購物車
    async addCart (data) {
      console.log(this)
      // 先驗證 -------------------------
      // A.先判斷使用者有沒有登入(利用token來判斷)
      // this 應該是指使用者的資料data(最上面state)
      if (this.token.length === 0) {
        // alert(123)  測試問題
        Swal.fire({
          title: 'ERROR //失敗',
          text: '請先登入'
        })
        // 如果沒有登入，將頁面跳到登入頁
        router.push('/login')
        return
      }
      //  商品數量沒有也不行
      if (data.quantity < 0) {
        Swal.fire({
          title: 'ERROR //失敗',
          text: '數量必須大於0'
        })
      }
      try {
        // 驗證成功後跟後端請求 ------------------------
        //  const { data: resData } 解構後重新命名resData
        const { data: resData } = await apiAuth.post('/users/cart', data)
        // 請求路徑 router.post('/cart', content('application/json'), auth.jwt, addCart)
        // resData.result(回傳數量)
        this.cart = resData.result
        Swal.fire({
          title: 'success //成功',
          text: '加入購物車成功'
        })
        console.log(this.cart)
      } catch (error) {
        // alert(456) 測試問題
        Swal.fire({
          title: 'ERROR //失敗',
          text: '加入購物車失敗'
        })
      }
    },
    // 更新購物車
    async updateCart (data) {
      try {
        await apiAuth.patch('/users/cart', data)
        // 把data資料傳給後端(請求內容位置的路徑) router.patch('/cart', content('application/json'), auth.jwt, editCart)
        return '資料回傳成功'
        //  成功後，往外傳資料出去修改(就是給前台 views/front/CartView.vue)
        // 當 async 函式被呼叫時，它會回傳一個 Promis
      } catch (error) {
        Swal.fire({
          title: '失敗',
          text: '更新購物車失敗'
        })
        return false
      }
    },
    // 結帳 (建立訂單)
    async checkout () {
      try {
        // 跟後端請求 router.post('/', auth.jwt, createOrder)
        // 執行createOrder後產生 訂單後存檔
        await apiAuth.post('/orders')
        // 結帳完畢，取得訂單內容後，清空購物車
        this.cart = 0
        Swal.fire({
          title: 'success //成功',
          text: '結帳成功'
        })
        // 成功結束後頁面跳到訂單頁
        router.push('/orders')
      } catch (error) {
        Swal.fire({
          title: 'ERROR //失敗',
          text: '結帳失敗'
        })
      }
    },
    // 處理將token存在localStorage裡面(避免頁面刷新而登出)
    // 讓我們一打開網頁就直接呼叫getUser()先取得登入的這個使用者資料
    // 會設定到全域開場頁APP.vue那邊設定呼叫
    async getUser () {
      // 抓自己的資料(當沒有token就跳出)
      if (this.token.length === 0) { return }
      try {
        const { data } = await apiAuth.get('/users')
        // 請求來源後端 routes/users.js (取得自己資料後)
        // router.get('/', auth.jwt, getUser)
        this.account = data.result.account
        this.email = data.result.email
        this.role = data.result.role
        this.cart = data.result.cart
      } catch (error) {
        // 請求失敗直接登出
        this.logout()
      }
    },
    async delUser (id) {
      try {
        // await apiAuth.delete(`/users/${id}`)
        await apiAuth.delete('/users/' + id)
        Swal.fire({
          // icon: 'success',
          title: 'SUCCESS //成功',
          text: '刪除成功'
        })
      } catch (_) {
        // 不做錯誤處理了
      }
    },
    async updateUser (id) {
      try {
        const { data } = await apiAuth.patch(/users/ + id)
        this.token = data.result.token
        this.email = data.result.email
        this.account = data.result.account
        this.role = data.result.role
      } catch (_) {
        // 不做錯誤處理了
      }
    }
  },
  // 將Vue數據存儲到localStorage
  // 要裝 pinia-plugin-persistedstate 的套件
  // 匯入寫在plugins/pinia.js
  persist: {
    key: 'vite-web',
    // 只存登入的使用者token於localStorage
    paths: ['token']
  }
})
