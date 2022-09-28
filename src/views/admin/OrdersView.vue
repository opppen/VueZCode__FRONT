<template>
  <div id="orders">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">管理者訂單管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂購會員</th>
              <th>訂購日期</th>
              <th>訂單金額</th>
              <th>商品名稱</th>
              <th>處理狀態</th>
              <th>管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, idx) in sliceOrders" :key="order._id" >
              <td>{{ order._id }}</td>
              <td v-if="order.user === null">帳號已經刪除</td>
              <td v-else>{{ order.user.email }}</td>
              <td>{{ new Date(order.date).toLocaleDateString() }}</td>
              <td>{{ order.totalPrice }}</td>
              <td>
                <ul>
                  <li v-for="product in order.products" :key="product._id">
                  {{ product.product.name }} x {{ product.quantity }}
                  </li>
                </ul>
              </td>
              <td v-if="order.tone === 0">
                <v-icon size="x-large" start color="red">mdi-comment-outline</v-icon>訂單確認中
              </td>
              <td v-if="order.tone === 1">
                <v-icon size="x-large" start color="yellow">mdi-comment-processing-outline</v-icon>商品出貨中
              </td>
              <td v-if="order.tone === 2">
                <v-icon size="x-large" start color="green">mdi-comment-check-outline</v-icon>訂單已完成
              </td>
              <td v-if="order.tone === 3">
                <v-icon size="x-large" start color="blue">mdi-comment-remove-outline</v-icon>訂單已取消
              </td>
              <td>
                <v-btn v-if='currentPage === 1' @click="openDialog(order._id, idx)" variant="outlined" plain size="x-small" rounded="lg">編輯</v-btn>
                <v-btn v-else @click="openDialog(user._id, idx + (currentPage - 1) * pageShowOrders)" variant="outlined" plain size="x-small" rounded="lg">編輯</v-btn>
              </td>
            </tr>
            <tr v-if="orders.length === 0">
              <td colspan="5">
                <h3 class="text-center">沒有訂單</h3>
              </td>
            </tr>
        </tbody>
        </v-table>
      </v-col>
    </v-row>

    <!-- 分頁條 -->
    <v-pagination v-model='currentPage' :length="Math.ceil(orders.length / pageShowOrders)" rounded="circle" class="ma-5"></v-pagination>

    <v-dialog v-model="form.dialog">
      <v-card rounded="xl" width="300">
        <v-form v-model="form.valid" @submit.prevent="submitForm" >

          <!-- 對話表單卡片標題 -->
          <v-card-title>
            <div class="text-h5 font-weight-bold text-center py-5">編輯訂單</div>
            <v-divider></v-divider>
          </v-card-title>

          <!-- 對話表單卡片內容樣式 -->
          <v-card-text>
            <v-container>
              <v-row>
                <!-- <v-col cols="12">
                  <v-text-field label="訂購者信箱" v-model="form.email" :rules="[rules.required, rules.email]" type="text"></v-text-field>
                </v-col> -->
                <v-col cols="12">
                  <!-- <v-select label="訂單狀態" v-model="form.category" :items="categorise" :rules="[rules.required]"></v-select> -->
                  <v-radio-group v-model="form.tone" mandatory>
                    <v-radio label="訂單確認中" color="red"  value="0" ></v-radio>
                    <v-radio label="商品出貨中" color="yellow" value="1"></v-radio>
                    <v-radio label="訂單已完成" color="green" value="2"></v-radio>
                    <v-radio label="訂單已取消" color="blue" value="3"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <!-- 對話表單卡片的確定取消鈕 -->
          <v-card-actions>
            <v-container class="d-flex mt-n16">
              <!-- <v-btn @click="delUser(idx)" color="error">訂單刪除</v-btn> -->
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

<script setup>
import { ref, reactive, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { isEmail } from 'validator'

const orders = reactive([])
const form = reactive({
  // 訂單編號
  _id: '',
  // 信箱
  email: '',
  // 訂單狀況
  tone: '',
  category: '訂單確認中',
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
// const categorise = reactive(['訂單確認中', '出貨中', '訂單完成'])
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
// 控制數量分頁
// ------------------------------------
// 每頁顯示的會員人數
const pageShowOrders = 5
// 目前顯示的頁數的位置
const currentPage = ref(1)
// 計算顯示會員人數限制內容 (放在頁面上跑迴圈是必須要篩選計算過的)
const sliceOrders = computed(() => {
  return orders.slice((currentPage.value * pageShowOrders) - pageShowOrders, (currentPage.value * pageShowOrders))
})

// ----------------------------------------------------------
// 訂單產生排序(最新的最上面)
// ----------------------------------------------------------
const reverseOrders = computed(() => {
  // 將orders透過.slice(0)拷貝產生新的陣列才處理.reverse()
  // https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
  // https:// ithelp.ithome.com.tw/articles/10224915
  return orders.slice(0).reverse()
})

// ------------------------------------
// 點開編輯表單預設的內容(和原本資料一樣)
// ------------------------------------
const openDialog = (_id, idx) => {
  form._id = orders[idx]._id
  // form.email = orders[idx].user.email
  // form.category = orders[idx].category
  form.tone = orders[idx].tone

  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}
const submitForm = async () => {
  // 假如輸入表單格式驗證錯誤 重複執行(讓使用者輸入的格式正確後才開始下面)
  // if (!form.valid) return
  // 送出標單後，(執行)讀取loading動畫
  form.submitting = true
  try {
    // 檔案格式為form(看RegisterView.vue的部分是用form)，不用formdata
    // 註冊使用者的時候就是新增使用者的資料到後台，可以看他請求的方式
    // ProductView.vue的商品格式用的FormData原因是因為有圖片其他格式
    const { data } = await apiAuth.patch('/orders/' + form._id, form)
    orders[form.idx].tone = data.result.tone

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
const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    // 請求來源為後端的router/orders.js (管理員的部分)(取得全部訂單)
    // router.get('/all', auth.jwt, admin, getAllOrders)
    orders.push(...data.result.map(
      (order) => {
        order.totalPrice = order.products.reduce((a, b) => {
          return a + b.product.price * b.quantity
        }, 0)
        return order
      }
    ))
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'ERROR //失敗',
      text: '無法取得訂單'
    })
  }
}
init()
</script>
<style scoped>
/* * {outline: 1px solid red;} */
</style>
