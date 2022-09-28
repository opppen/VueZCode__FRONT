<template>
  <div id="register">
    <v-container>
      <CodeWrapSet />
      <v-col clos="12">
        <TitlePart ><template v-slot:text >Join</template></TitlePart>
      </v-col>

      <v-row>
        <v-col col="12">
          <v-card class="pa-2 pa-md-10 mx-auto" rounded="xl" elevation="20" max-width="600" max-height="480" align="center">
            <v-card-text class="d-flex flex-column algin-center">
                <!-- @submit.prevent="register" 這邊是按下去擋住換頁的功能而是執行註冊功能 -->
                <v-form v-model="valid" @submit.prevent="register">
                  <v-text-field
                    type="text"
                    label="帳號"
                    v-model="form.account"
                    :rules="rules.account"
                    counter="20"
                    maxlength="20"></v-text-field>
                  <v-text-field
                    type="email"
                    label="信箱"
                    v-model="form.email"
                    :rules="rules.email"></v-text-field>
                  <v-text-field
                    type="password"
                    label="密碼"
                    v-model="form.password"
                    :rules="rules.password"
                    counter="20"
                    maxlength="20"></v-text-field>
                  <v-btn size="x-large" width="80%" type="submit" variant="outlined" color="green" class="mx-auto mt-5" :loading="loading">註冊</v-btn>
                </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>

// 使用 v-model 綁定
// -----------------------------------------------------------
import { reactive, ref } from 'vue'
// 匯入validator套件裡的isEmail給 email驗證用
import { isEmail } from 'validator'
// import axios from 'axios'(改其他方式)
import { api } from '@/plugins/axios'
// vue-router裡面的 useRouter 可以做操作。 useRoute不行喔
// useRouter()提供操作網址用的函式（例如： router.push("\Home") 用來轉向）
import { useRouter } from 'vue-router'
// 匯入sweetalert2套件 https://sweetalert2.github.io/
import Swal from 'sweetalert2'
import CodeWrapSet from '@/components/CodeWrapSet.vue'

// 註冊一個 router

const router = useRouter()

const form = reactive({
  account: '',
  email: '',
  password: ''
})
const valid = ref(false)
const loading = ref(false)

// 前台驗證(針對每個欄位去做客製化)
// -----------------------------------------------------------
// https://next.vuetifyjs.com/en/components/text-fields/ (驗證方式是用規則去分類然後分別套在所要的地方)
const rules = reactive({
  account: [
    value => !!value || '帳號必填',
    value => (value.length >= 4 && value.length <= 20) || '帳號長度為4到20個字',
    // value => value.match(/^[a-zA-Z0-9]+$/) || '帳號只能由英文數字組成'
    // 正則表達式方法.test( ) 方法用以表示參數字串是否符合正則表達式的字串格式。會回傳 true / false
    value => /^[a-zA-Z0-9]+$/.test(value) || '帳號只能由英文數字組成'
  ],
  email: [
    value => !!value || '信箱必填',
    value => isEmail(value) || '信箱格式錯誤'
  ],
  password: [
    // value = v
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為4到20個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英文數字組成'
  ]
})

const register = async () => {
  // 假如表單沒有驗證成功的話就跳出去
  if (!valid.value) {
    return
  }
  // 點下去的時候讓按鈕的loading動畫動起來
  loading.value = true
  try {
    /*
    有需要跟後端API要資料的話都會需要補上網址。
    但等於是大量要寫這段。所以老師拉出去另外寫axios(plusgins/axios.js)
    來取代import.meta.env.VITE_API這個網址
    <<< 原本寫的 >>>
    axios.post(import.meta.env.VITE_API + '/users/register', form)
    */
    // 傳入form的內容(使用者輸入的帳號信箱密碼)
    await api.post('/users', form)
    await Swal.fire({
      // icon: 'success',
      title: 'SUCCESS //成功',
      text: '註冊成功'
    })
    // 成功註冊後頁面轉回首頁
    router.push('/')
  } catch (error) {
    Swal.fire({
      // icon: 'error',
      title: 'ERROR //失敗',
      // Axios發生錯誤而且有拿到資料的話 就顯示 error.response.data.message 否則是顯示'發生錯誤'
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  // 結束後loading動畫停止
  loading.value = false
}

</script>

<!-- // ----------------------------------------------------------- -->
<!-- // ----------------------------------------------------------- -->
<!-- 問題區
  #### 為什麼<v-form v-model="valid"> ? valid是甚麼 ?? (表單有沒有過驗證)
  (自我解釋)
   a css偽元素用法：:valid 說明：用在input輸入框，要有type。依type來驗証輸入值是否有效，valid 有效才套用樣式。
   因為要靠註冊按鈕來反應整份表單的驗證。也讓可以直接鍵盤送出訊息。所以v-model="valid"，但註冊按鈕的btn要設置 type="submit"

-->

<!--
  雙向綁定的v-model

  v-text-field -> counter:輸入文字的計數器(預設25字)

  v-form
  https://next.vuetifyjs.com/en/components/forms/
  https://next.vuetifyjs.com/en/api/v-form/

  【Vue 3】ref 跟 reactive 我該怎麼選!?
  https://medium.com/i-am-mike/vue-3-ref-%E8%B7%9F-reactive-%E6%88%91%E8%A9%B2%E6%80%8E%E9%BA%BC%E9%81%B8-2fb6b6735a3c

-->

<!--

會用 v-form 包是因為可以用鍵盤送出?

-->
