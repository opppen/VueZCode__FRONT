<template>
<div id="cart">
  <v-container>

    <v-col>
      <TitlePart ><template v-slot:text >Cart</template></TitlePart>
    </v-col>

    <v-row>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-center">圖片</th>
              <th class="text-center">商品名稱</th>
              <th class="text-center">單價</th>
              <th class="text-center">數量</th>
              <th class="text-center">小計</th>
              <th class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in cart" :key="item._id" :class="{'bg-red':!item.product.sell}">
              <td>
                <v-img :src="item.product.image" max-width="100" max-height="100"></v-img>
              </td>
              <td class="text-center">{{ item.product.name }}</td>
              <td class="text-center">{{ item.product.price }}</td>
              <td>
                <v-row class="justify-center align-center">
                  <v-btn icon="mdi-minus" size="small" variant="outlined" class="mx-2" @click="updateCart(idx, item.quantity-1)"></v-btn>
                  {{ item.quantity }}
                  <v-btn icon="mdi-plus" size="small" variant="outlined" class="mx-2"  @click="updateCart(idx, item.quantity+1)"></v-btn>
                </v-row>
              </td>
              <td  class="text-center">NT$ {{ item.product.price * item.quantity }}</td>
              <td>
                <v-btn class="mx-auto" @click="updateCart(idx, 0)">刪除</v-btn>
              </td>
            </tr>
            <tr>
              <td colspan="6" v-if="cart.length === 0">
                <h3 class="text-center">NoProduct //沒有商品</h3>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-divider></v-divider>
      <v-col  cols="12" class="text-center">
        <p>總金額 : NT$ {{ totalPrice }}</p>
        <v-btn class="w-100 mt-16 mx-auto" @click="user.checkout" :disabled="!canCheckout">結帳</v-btn>
      </v-col>
    </v-row>

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
