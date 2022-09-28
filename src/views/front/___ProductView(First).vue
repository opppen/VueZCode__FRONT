<template>
  <div id="product">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">{{ product.name }}</h1>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" class="text-center">
          <v-img :src="product.image"></v-img>
          <p>${{ product.price }}</p>
        </v-col>
        <v-col cols="12">
          <p style="white-space:pre;"> {{ product.description }}</p>
        </v-col>
        <v-col cols="12">
          <v-form v-model='valid' @submit.prevent="submit">
            <v-text-field label="數量" type="number" min="0" v-model="product.quantity" :rules="quantityRule"></v-text-field>
            <v-btn type="submit">加入購物車</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-overlay :model-value="!product.sell" class="align-center justify-center" color="#036358">
        <h1 class="text-black">已下架</h1>
      </v-overlay>
    </v-container>
  </div>
</template>
<script setup>
// 給變數 product 可以讓上面綁定套用
import { reactive, ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user.js'

// 單一商品頁面前台會顯示的資料物件
// quantity: 0 我測試放在這邊(但可能會讓結帳的時候數量增加有問題) ----------------------------------!!!!!!!!!!!!!!!!!!!!!
const product = reactive({
  _id: '',
  name: '',
  price: '',
  category: '',
  sell: true,
  image: '',
  description: '',
  quantity: 0
})
// 單一商品頁面前台會顯示的數量預設0
// const quantity = ref('')
// 用這個方式的話 上方要改 import { reactive, ref } from 'vue'

// 單一商品數量的驗證規則
const quantityRule = reactive([
  v => v >= 1 || '數量錯誤'
])

// 按下加入購物車的v-btn時送出表單前的驗證狀態
const valid = ref(false)
const submit = () => {
  if (!valid.value) {
    return
  }
  user.addCart({
    product: product._id,
    // quantity: quantity.value
    quantity: product.quantity
  })
}

// 要加入購物車的條件要有
// import { useUserStore } from '@/stores/user.js'
const user = useUserStore()

// ------------------------------------
// init 頁面打開讀入初始化 (取得商品資料讓前台有東西跑出來)
// ------------------------------------
const route = useRoute()
const router = useRouter()
const init = async () => {
  try {
    // 要抓到route.params.id 必須有
    // import { useRoute, useRouter } from 'vue-router'
    // const route = useRoute()
    // route.params.id ()= product._id
    const { data } = await api.get('/products/' + route.params.id)
    // import { api } from '@/plugins/axios' (這邊抓到 const { data } )
    // 連動 前台 = 後端資料庫 ( 然後上面的 const product = reactive({}) 就有東西)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.category = data.result.category
    product.sell = data.result.sell
    product.image = data.result.image
    product.description = data.result.description
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    // 錯誤就讓使用者回到上一頁面
    router.go(-1)
    // 要引入import { useRouter } from 'vue-router'
    // 設定 const router = useRouter()
    // 這樣才能操控路由去向
  }
}
init()
</script>
