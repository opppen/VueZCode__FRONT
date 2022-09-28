<template>
<div id="login">

  <v-container>
    <CodeWrapSet />
      <v-col clos="12">
        <TitlePart ><template v-slot:text >Login</template></TitlePart>
      </v-col>

      <v-row >
        <v-col col="12">
          <v-card class="pa-2 pa-md-10 mx-auto" rounded="xl" elevation="20" max-width="600" max-height="480" align="center">
            <v-card-text class="d-flex flex-column algin-center">
              <v-form v-model="valid" @submit.prevent="login">
                <!-- <v-text-field
                  type="text"
                  label="帳號"
                  v-model="form.account"
                  :rules="rules.account"
                  counter="20"
                  maxlength="20"></v-text-field> -->
                <v-text-field
                  type="email"
                  label="信箱"
                  v-model="form.email"
                  :rules="rules.email"
                  elevation="24">
                </v-text-field>

                <v-text-field
                  type="password"
                  label="密碼"
                  v-model="form.password"
                  :rules="rules.password"
                  counter="20"
                  maxlength="20"
                  elevation="24">
                </v-text-field>
                <v-row class="align-center justify-space-between mt-n10 px-md-5">
                  <v-col class="text-body-2">
                    <v-checkbox
                      label="Remember me"
                      color="success"
                      value="success"
                      hide-details
                      density="comfortable"
                      class="checkbox"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="text-body-2 ForgotPassword text-end">Forgot password</v-col>
                </v-row>

                <v-btn size="x-large" width="80%" type="submit" variant="outlined" color="red" class="mx-auto mt-6 mt-md-16" :loading="loading">登入</v-btn>
                <v-col class="mx-auto my-5 text-center text-body-2">
                  Don't have an account? <router-link :to="'/register'"><span style="color: yellow;" class="font-weight-bold">Join!</span></router-link>
                </v-col>
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
import CodeWrapSet from '@/components/CodeWrapSet.vue'
// 匯入validator套件裡的isEmail給 email驗證用
import { isEmail } from 'validator'
// import axios from 'axios'(改其他方式)
// import { api } from '@/plugins/axios' (這邊用不到，因為我們login方式靠stores來控制)
// vue-router裡面的 useRouter 可以做操作。 useRoute不行喔
// useRouter()提供操作網址用的函式（例如： router.push("\Home") 用來轉向）
// import { useRouter } from 'vue-router' (這邊用不到，因為我們login方式靠stores來控制)
// 匯入sweetalert2套件 https://sweetalert2.github.io/
// import Swal from 'sweetalert2'

// 註冊一個 router
// const router = useRouter() (這邊用不到，因為我們login方式靠stores來控制)
// 改其他方式來跳頁（在pinia環境下要import router from '@/router')

// 改套用@/stores/user.js ------------------------------
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const form = reactive({
  // account: '',
  email: '',
  password: ''
})
const valid = ref(false)
const loading = ref(false)

// 前台驗證(針對每個欄位去做客製化)
// -----------------------------------------------------------
// https://next.vuetifyjs.com/en/components/text-fields/ (驗證方式是用規則去分類然後分別套在所要的地方)
const rules = reactive({
  // account: [
  //   value => !!value || '帳號必填',
  //   value => (value.length >= 4 && value.length <= 20) || '帳號長度為4到20個字',
  //   // value => value.match(/^[a-zA-Z0-9]+$/) || '帳號只能由英文數字組成'
  //   // 正則表達式方法.test( ) 方法用以表示參數字串是否符合正則表達式的字串格式。會回傳 true / false
  //   value => /^[a-zA-Z0-9]+$/.test(value) || '帳號只能由英文數字組成'
  // ],
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

const login = () => {
  // user => @/stores/user.js
  user.login(form)
}

</script>
<style scoped>
/* * { outline:1px solid red; } */
a, .router-link-active { text-decoration: none; }
.v-label, .text-body-2 {
  font-family: 'Fira Code' !important;
  letter-spacing: -1px !important;
}
.ForgotPassword.text-body-2 {
  font-size: 16px !important;
  padding-bottom: 18px;
  opacity: 0.5;
}
::v-deep .checkbox .v-label {
  font-size: 16px !important;
}

</style>
