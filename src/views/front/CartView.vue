<template>
<div id="cart">
  <CodeWrapSet />
  <v-container>
    <v-col>
      <TitlePart ><template v-slot:text >Cart</template></TitlePart>
    </v-col>

    <v-card color="white" class="pa-10" rounded="xl">

      <v-alert
        v-if="cart.length === 0"
        border="top"
        prominent
        variant="outlined"
        type="warning"
        color="black"
        class="text-center text-subtitle-2"
      >
      // 沒有商品 NoProduct
      </v-alert>

      <v-row v-for="(item, idx) in cart" :key="item._id" :class="{'bg-red':!item.product.sell}" class="align-center mb-10">
        <v-col cols="12" md="6">
          <v-row class="align-center">
            <v-col class="pa-0" cols="4">
              <v-img :src="item.product.image" max-width="100" height="70"></v-img>
            </v-col>

            <v-col cols="8">
              <h3 class="pb-2 text-subtitle-2">{{ item.product.name }}</h3>
              <div class="d-flex h-100 align-center text-grey-darken-2">
                <p class="pr-5 text-subtitle-2">NT$ {{ item.product.price }}</p>
                <v-btn @click="updateCart(idx, 0)" icon="mdi-delete-forever" variant="text" size="x-small" id="mdi-delete-forever"></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6" class="pa-3">
          <v-row class="align-end align-md-center justify-space-between pb-4">
            <div class="d-flex align-center quantity-btn justify-space-between">
              <span><v-btn variant="text" icon="mdi-minus" @click="updateCart(idx, item.quantity-1)"></v-btn></span>
              <span>{{ item.quantity }}</span>
              <span><v-btn variant="text" icon="mdi-plus" @click="updateCart(idx, item.quantity+1)"></v-btn></span>
            </div>
            <div class="text-subtitle-2 font-weight-bold">小計 NT$ {{ item.product.price * item.quantity }}</div>
          </v-row>
        </v-col>
        <v-divider thickness="1px" color="black"></v-divider>
      </v-row>

      <v-col  cols="12" class="text-center mt-8">
        <h4>總金額 : NT$ {{ totalPrice }}</h4>
        <v-btn class="w-100 mt-16 mx-auto" @click="user.checkout" :disabled="!canCheckout" color="yellow">結帳</v-btn>
      </v-col>
    </v-card>

  </v-container>

</div>
</template>
<script setup>
/*
:disabled="!canCheckout" (防止購物車內有下架商品，讓他禁止結帳)
(item, idx) in cart" 如果要做過濾或收尋的話不要用idx
透過v-on:click 綁定事件，@click是簡寫
@click="updateCart(idx, item.quantity-1) 這邊不要用item.quantity--(++)會改到自己的值
*/

import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios.js'
import { useUserStore } from '@/stores/user.js'
import CodeWrapSet from '@/components/CodeWrapSet.vue'

// import { useUserStore } from '@/stores/user.js'
const user = useUserStore()
// 設定一個購物車變數名叫 cart 來存放API來的資料
const cart = reactive([])

// ------------------------------------
// totalPrice 總金額
// ------------------------------------
const totalPrice = computed(() => {
  // .reduce()累加 --> a是累加值 b是目前的東西
  // 最後0是代表初始值(從0開始累加)
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
  // a=0, b=第一個陣列的東西(b.product.price * b.quantity) 而一直跑loop
  // a=(第一個陣列的東西(b.product.price * b.quantity)), b=第二個陣列的東西(b.product.price * b.quantity)
})

// ------------------------------------
// canCheckout 購物車可結帳條件(判斷是否有下架商品(如果有禁止結帳))
// ------------------------------------
const canCheckout = computed(() => {
  // 購物車有商品而且沒有已經下架的商品
  return cart.length > 0 && !cart.some(item => {
    // 回傳已經下架商品
    return !item.product.sell
  })
  // cart.some()去找東西然後回傳是布林值(true/false)
  // cart.some(item => { return !item.product.sell }) 這樣是去找已下架的商品
})

// ------------------------------------
// updateCart 修改數量(更新購物車)
// ------------------------------------
const updateCart = async (idx, quantity) => {
// 前台先改資料。然後後端資料庫也連動修改
// 前台修改好數量後。去呼叫 import { useUserStore } from '@/stores/user.js'/updateCart
// 等待他跟後端 router.patch('/cart', content('application/json'), auth.jwt, editCart) 更新資料後又丟回前台這邊
  const result = await user.updateCart({ product: cart[idx].product._id, quantity })
  // 這邊的 result 是指後台的使用者購物車資料(回傳給前台) ?
  console.log(result)
  if (result) {
    if (quantity === 0) {
      // 如果前台數量是0的話，刪除商品
      cart.splice(idx, 1)
    } else {
      // 後台的商品數量 = 前台的商品數量
      cart[idx].quantity = quantity
    }
    // console.log(cart[idx])
  }
}

// ------------------------------------
// init 頁面打開讀入初始化 (取得商品資料讓前台有東西跑出來)
// ------------------------------------
const init = async () => {
  try {
    // 需要使用者的資料就必須要登入驗證
    // import { apiAuth } from '@plugins/axios.js'
    // 取得後端 models/users.js/cart 的資料??????????????(不確定......)
    const { data } = await apiAuth.get('/users/cart')
    // 請求成功後 把資料塞到上面的變數
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      title: 'ERROR //失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>

<style scoped>
/* * { outline: 1px solid rgba(0,0,0, 0.1); } */
::v-deep #mdi-delete-forever .v-icon{
  --v-icon-size-multiplier: 0.7 !important;
}
.quantity-btn {
  border: 1px solid black;
}
.quantity-btn span:nth-child(1),
.quantity-btn span:nth-child(3) {
  background-color: black;
  color: white;
}
.quantity-btn span:nth-child(2) {
  /* margin: auto; */
  width: 50px;
  text-align: center;
}
</style>
