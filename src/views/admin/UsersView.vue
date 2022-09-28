<template>
  <div id="admin-users">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">會員管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-table fixed-header height="300">
          <thead>
            <tr>
              <th>會員編號</th>
              <th>信箱</th>
              <th>帳號</th>
              <th>是否管理員</th>
              <th>管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, idx) in sliceUsers" :key="user._id">
              <td> {{ user._id }} </td>
              <td> {{ user.email }} </td>
              <td> {{ user.account }}</td>
              <td>
                <!-- <v-switch inset hide-details v-model="user.role" color="red"></v-switch> -->
              <v-radio olor="success" v-model="user.role" disabled></v-radio></td>
              <td>
                <v-btn v-if='currentPage === 1' @click="openDialog(user._id, idx)" variant="outlined" plain size="x-small" rounded="lg">編輯</v-btn>
                <v-btn v-else @click="openDialog(user._id, idx + (currentPage - 1) * pageShowUesrs)" variant="outlined" plain size="x-small" rounded="lg">編輯</v-btn>
              </td>
            </tr>
            <tr v-if=" users.length === 0 " >
              <td colspan="4" class="text-center">沒有會員</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <!-- 分頁條 -->
    <v-pagination v-model='currentPage' :length="Math.ceil(users.length / pageShowUesrs)" rounded="circle" class="ma-5"></v-pagination>

    <!-- 點編輯會跳出對話表單 [persistent是固定在中間位置] -->
    <v-dialog v-model="form.dialog" persistent>
      <v-card rounded="xl">
        <v-form v-model="form.valid" @submit.prevent="submitForm" >

          <!-- 對話表單卡片標題 -->
          <v-card-title>
            <div class="text-h5 font-weight-bold text-center py-5">編輯會員資料</div>
            <v-divider></v-divider>
          </v-card-title>

          <!-- 對話表單卡片內容樣式 -->
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="信箱" v-model="form.email" :rules="[rules.required, rules.email]" type="text"  hide-details="auto" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="帳號" v-model="form.account" :rules="[rules.required]" type="text"  hide-details="auto" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex justify-space-between align-center">
                  <v-checkbox label="(打勾)管理員" v-model="form.role" hide-details></v-checkbox>
                  <v-btn @click="delUser(idx)" variant="outlined" size="x-small" style="opacity:0.4;">刪除此會員</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <!-- 對話表單卡片的確定取消鈕 -->
          <v-card-actions>
            <v-container class="d-flex">

              <!-- disadled 停用 -->
              <v-btn @click="form.dialog = false" color="red" variant="tonal" :disadled="form.submitting">取消</v-btn>
                            <v-spacer/>
              <v-btn type="submit" variant="tonal" :loading="form.submitting" color="green">確認送出</v-btn>
            </v-container>
          </v-card-actions>

        </v-form>
      </v-card>
    </v-dialog>

  </div>
</template>
d
<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import validator from 'validator'
// 引入攔截器 補上使用者的token，帶入到 headers 當中
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia'
// ------------------------------------
// 控制彈跳對話框(預設是關閉)
// ------------------------------------
// const dialog = ref(false)

// ------------------------------------
// 請求取得 await apiAuth.get('/products/all')取得資料的暫存區  (init)
// ------------------------------------
const users = reactive([])
const user = useUserStore()
const { avatar, account } = storeToRefs(user)
// ------------------------------------
// 控制彈跳對話框(預設是關閉)
// ------------------------------------
// const dialog = ref(false)

// ------------------------------------
// 控制數量分頁
// ------------------------------------
// 每頁顯示的會員人數
const pageShowUesrs = 5
// 目前顯示的頁數的位置
const currentPage = ref(1)
// 計算顯示會員人數限制內容 (放在頁面上跑迴圈是必須要篩選計算過的)
const sliceUsers = computed(() => {
  return users.slice((currentPage.value * pageShowUesrs) - pageShowUesrs, (currentPage.value * pageShowUesrs))
})

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
    return validator.isEmail(v) || '信箱格式錯誤'
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
  try {
    // 檔案格式為form(看RegisterView.vue的部分是用form)，不用formdata
    // 註冊使用者的時候就是新增使用者的資料到後台，可以看他請求的方式
    // ProductView.vue的商品格式用的FormData原因是因為有圖片其他格式
    const { data } = await apiAuth.patch('/users/' + form._id, form)
    users[form.idx] = data.result

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
// 對stores/users.js裡面的delUser做使用
const delUser = async (idx) => {
  const result = await user.delUser(form._id)
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
<style scoped>
/* *{ outline: 1px solid red; } */

/* 讓sweetalert最上顯 */
.v-overlay {
   z-index: 50 !important;
}
</style>
