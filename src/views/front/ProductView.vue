<template>
  <div id="product">
    <v-container class="pa-0 pa-md-1 py-6">
      <v-card color="white" class="mt-md-5 ma-md-10" rounded="xl">
        <v-col cols="12">
          <v-breadcrumbs class="text-body-2">
            <v-breadcrumbs-item to="/">TOP</v-breadcrumbs-item>
            <v-breadcrumbs-divider>/</v-breadcrumbs-divider>
            <v-breadcrumbs-item to="/goods">GOODS</v-breadcrumbs-item>
            <v-breadcrumbs-divider>/</v-breadcrumbs-divider>
            <v-breadcrumbs-item disabled>{{ product.name }}</v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-col>
        <v-row class="pa-3 ma-md-10">
          <v-col cols="12" md="6" class="text-center">
            <v-img :src="product.image" max-height="500"></v-img>
          </v-col>

          <v-col cols="12" md="6" >
            <v-col cols="12">
              <h1 class="text-h6 font-weight-black" style="word-wrap:break-word;">{{ product.name }}</h1>
              <p class="py-5 text-h3 font-weight-black">${{ product.price }}</p>

            </v-col>

            <v-col cols="12">
              <v-form v-model='valid' @submit.prevent="submit">
                <v-row>
                  <v-divider color="black" class="mb-2"></v-divider>
                  <v-col cols="12" md="3"><v-text-field label="數量" type="number" min="0" v-model="product.quantity" :rules="quantityRule" variant="outlined" hide-details="auto"></v-text-field></v-col>
                  <v-col cols="12" md="9"><v-btn type="submit" color="yellow" block density="default" size="x-large" prepend-icon="mdi-cart">加入購物車</v-btn></v-col>
                  <v-divider color="black" class="mt-2"></v-divider>
                </v-row>
              </v-form>
            </v-col>
            <v-col cols="12">
              <p style="white-space:pre-wrap;" class="text-body-2 text-grey-darken-1"> {{ product.description }}</p>
            </v-col>
          </v-col>

        </v-row>
      </v-card>

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

<style scoped>
  /* * { outline: 1px solid red; } */
</style>
