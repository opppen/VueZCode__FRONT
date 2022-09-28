<template>
  <div id="admin-users">

  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

    <v-dialog v-model="form.dialog">
      <v-card>
        <v-form v-model="form.valid" @submit.prevent="submitForm" >

          <v-card-title>
            <div class="text-h5">編輯會員資料</div>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="信箱" v-model="form.email" :rules="[rules.required, rules.email]" type="text"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="帳號" v-model="form.account" :rules="[rules.required]" type="text"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-checkbox label="(打勾)管理員" v-model="form.role"></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-container class="d-flex">
              <v-btn @click="delUser(idx)" color="error">刪除</v-btn>
              <v-spacer/>
              <v-btn @click="form.dialog = false" color="error" variant="tonal" :disadled="form.submitting">取消</v-btn>
              <v-btn type="submit" variant="tonal" :loading="form.submitting">確認送出</v-btn>
            </v-container>
          </v-card-actions>

        </v-form>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { isEmail } from 'validator'
// 引入攔截器 補上使用者的token，帶入到 headers 當中
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user.js'

// ------------------------------------
// 控制彈跳對話框(預設是關閉)
// ------------------------------------
// const dialog = ref(false)

// ------------------------------------
// 請求取得 await apiAuth.get('/products/all')取得資料的暫存區  (init)
// ------------------------------------
const users = reactive([])
const user = useUserStore()
const headers = reactive([
  {
    text: '會員編號',
    value: 'user._id'
  },
  { text: '信箱', value: 'user.email' },
  { text: '帳號', value: 'user.account' },
  { text: '管理員', value: 'user.role' }
])
// ------------------------------------
// 控制彈跳對話框(預設是關閉)
// ------------------------------------
// const dialog = ref(false)

// ------------------------------------
// 設計編輯使用者資料的表單預設相關格式(含控制表單) (可對應後端的models/users.js)
// ------------------------------------
const form = reactive({
  // 會員編號
  _id: '',
  // 帳號
  account: '',
  // 信箱
  email: '',
  // 是否管理員
  role: false,

  // 控制彈跳對話框(預設是關閉)
  dialog: false,
  // 表單送出前的驗證(判斷表單有沒有驗證成功)
  valid: false,
  // 表單提交的時候（是否送出。有讀取Loading轉動的畫面）
  submitting: false,

  // 為了讓編輯商品的時候存檔時相對應的資料(陣列裡面的東西)索引是誰。而不用請求api
  // 如果不用這個方式的話就用findindex去找資料?
  // 為了判斷位置是否有資料來比對
  idx: -1
})

// ------------------------------------
// 編輯使用者資料的表單輸入資料的驗證規則 (參考ProductsView.vue/LoginView.viie)
// ------------------------------------
const rules = reactive({
  required (v) {
    return !!v || '必填'
  },
  email (v) {
    return isEmail(v) || '信箱格式錯誤'
    // import { isEmail } from 'validator' (驗證套件)
  }
})

// ------------------------------------
// 點開編輯表單預設的內容(和原本資料一樣)
// ------------------------------------
const openDialog = (_id, idx) => {
  form._id = users[idx]._id
  form.email = users[idx].email
  form.account = users[idx].account
  form.role = users[idx].role

  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}
// ------------------------------------
// submitForm 送出(修改內容表單)
// ------------------------------------\
const submitForm = async () => {
  // 假如輸入表單格式驗證錯誤 重複執行(讓使用者輸入的格式正確後才開始下面)
  if (!form.valid) return
  // 送出標單後，(執行)讀取loading動畫
  form.submitting = true

  // 前端產生新的FormData()，因為後端收的是FormData物件資料
  // 將要編輯相對的內容一個一個append加入new FormData()裡面
  const formData = new FormData()
  formData.append('email', form.email)
  formData.append('account', form.account)
  formData.append('role', form.role)

  try {
    // 後端資料請求來源為 routes/userss.js
    // router.patch('/:id', auth.jwt, admin, editAllUser)
    const { data } = await apiAuth.patch('/users/' + form._id, formData)
    users[form.idx] = data.result
    console.log(formData.account)

    Swal.fire({
      title: 'success //成功',
      text: '編輯成功'
    })

    // 編輯完成後關閉表單輸入對話框
    form.dialog = false
  } catch (error) {
    Swal.fire({
      title: 'ERROR //失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  // 送出標單完成後結束，(停止)讀取loading動畫
  form.submitting = false
}
// ------------------------------------
// delUser 刪除使用者
// ------------------------------------
const delUser = async (idx) => {
  const result = await user.delUser(users[idx]._id)
  console.log(result)
  users.splice(idx, 1)
}
// ------------------------------------
// updateUser 更新使用者
// ------------------------------------
// const updateUser = async (idx) => {
//   const { data } = await user.updateUser(users[idx]._id)
//   users[idx].role = data.result.role
// }

// ------------------------------------
// init 頁面打開讀入初始化
// ------------------------------------
const init = async () => {
  try {
    // router.get('/', auth.jwt, getUser)
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'ERROR //失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

</script>
