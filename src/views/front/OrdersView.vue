<template>
  <div id="orders">
    <CodeWrapSet />
    <v-container>

      <v-col>
        <TitlePart ><template v-slot:text >Orders</template></TitlePart>
      </v-col>

      <v-row class="justify-center w-100 pt-5">
        <v-col cols="12" md="3">
          <v-card
            class="text-center mx-auto"
            max-width="100%"
            max-height="250"
            tile
            rounded="xl"
          >
            <v-img
              height="200"
              cover
              src="https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
              class="pa-5"
              gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,1)"
            >
              <v-avatar color="green" size="100">
                <v-img :src="avatar" height="100%" cover></v-img>
              </v-avatar>
              <v-list-item-title class="pa-2">{{ account }}</v-list-item-title>
              <v-list-item-subtitle >{{ email }}</v-list-item-subtitle>

              <!-- <v-list-item
                class="text-white"
                :title="account"
                :subtitle="email"
                elevation="24"
              >
              </v-list-item> -->

            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="9">
          <v-card elevation="24">
            <v-table>
              <thead>
                <tr elevation="24">
                  <th>訂單編號</th>
                  <th>訂單日期</th>
                  <th>訂單金額</th>
                  <th>購買商品</th>
                  <th>訂單狀態</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in reverseOrders" :key="order._id" >
                  <td>{{ order._id }}</td>
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
                </tr>
                <tr v-if="orders.length === 0">
                  <td colspan="4">
                    <h3 class="text-center">沒有訂單</h3>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import CodeWrapSet from '@/components/CodeWrapSet.vue'

const user = useUserStore()
// 這邊直接抓取此登入的使用者資料(直接讀取stores)
// stores/user.jss
const { avatar, account, email } = storeToRefs(user)

const orders = reactive([])

// const reverseOrders = computed(() => {
//   return () => { return orders.reverse() }
// })

// const reverse = computed(() => {
//   // 設一定新的變數透過.slice(0)產生新的陣列資料(讓他去改變)
//   // https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
//   const reverseOrders = orders.slice(0)
//   return reverseOrders.reverse()
// })

// ----------------------------------------------------------
// 訂單產生排序(最新的最上面)
// ----------------------------------------------------------
const reverseOrders = computed(() => {
  // 將orders透過.slice(0)拷貝產生新的陣列才處理.reverse()
  // https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
  // https:// ithelp.ithome.com.tw/articles/10224915
  return orders.slice(0).reverse()
})

const init = async () => {
  try {
    // 取得此使用者訂單
    const { data } = await apiAuth.get('/orders')
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
