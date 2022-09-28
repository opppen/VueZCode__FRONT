<template>
  <div id="goods">

    <CodeWrapSet />
      <v-container>
        <v-col clos="12">
          <TitlePart ><template v-slot:text >Goods</template></TitlePart>
        </v-col>
        <v-row>
            <v-col v-for="product in products" :key="product._id" cols="6" md="6" lg="3">
              <ProductCard :product="product"></ProductCard>
            </v-col>
            <v-col  v-if="products.length === 0" cols="12">
              <h1 class="text-center">沒有商品</h1>
            </v-col>
        </v-row>
      </v-container>

  </div>

</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios.js'
// 匯入商品卡片套組(元件)
import ProductCard from '@/components/ProductCard.vue'
import CodeWrapSet from '@/components/CodeWrapSet.vue'
// import TitlePart from '@/components/TitlePart.vue'
// 設一個變數 products 來暫存後端來的資料
const products = reactive([])

// ------------------------------------
// init 頁面打開讀入初始化 (取得商品資料讓前台有東西跑出來)
// ------------------------------------
const init = async () => {
  try {
    // 管理員的商品頁面 取得資料的方式(apiAuth)因為是要看全部商品以及看使用者(要有JWT攔截補上)
    // const { data } = await apiAuth.get('/products/all')
    // ---------------------------------------------------P

    // 所以我們這邊只要取得連結後端的 api 就好
    const { data } = await api.get('/products')
    // 將後端資料放入前端暫存區
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      title: 'ERROR //失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
