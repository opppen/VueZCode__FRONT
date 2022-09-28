<template>
  <v-container fluid id="GoodsArea">
    <v-container class="mt-md-10 pt-md-16">

          <v-col cols="12" md="12" class="px-md-0 text-center d-none d-md-block text-black">
      <h1 class="font-weight-black text-h1">Goods</h1>
      <div class="text-body-1 font-weight-bold">&lt;-- 周邊商品 --&gt;</div>
    </v-col>
    <v-col cols="12" md="12" class="px-0 text-center d-block d-md-none text-black">
      <h1 class="font-weight-black">&lt;-- Goods --&gt;</h1>
      <div class="text-body-1 font-weight-bold">周邊商品</div>
    </v-col>
    </v-container>

    <v-divider color="black" class="mx-5 mx-md-16 mt-md-2" thickness="1"></v-divider>

    <v-container fluid class="wrap pb-5">
      <v-card theme="light" flat tile  rounded="false">

        <v-window v-model="onboarding">
          <v-window-item
            v-for="product in products"
          :key="product._id"
          >
            <v-card
              rounded="0"
              height="400"
            >
              <!-- <v-row class="flex-column pa-5 ma-0 h-100 w-100 d-md-none">
                <v-col class="product-title">
                    <h2 class="text-h4 font-weight-black pb-1">{{ product.name }}</h2>
                    <p class="text-body-2">{{ product.description }}</p>
                </v-col>

                <v-col class="product-img pa-0">
                  <v-img :src="product.image" max-height="300"></v-img>
                </v-col>

                <v-col class="product-price">
                    <h3>${{ product.price }}</h3>
                    <v-btn size="x-small" color="yellow" dark prepend-icon="mdi-cart" @click="addCart({ product: product._id, quantity:1 })" class="ml-auto px-5">加入購物車</v-btn>
                </v-col>

              </v-row> -->
              <v-row class="flex-column pa-5 px-md-16 ma-0 h-100 w-100 justify-md-center">

                <v-col class="product-title order-md-1" md="6">
                    <h2 class="text-h4 font-weight-black pb-1" style="white-space:pre-wrap;">{{ product.name }}</h2>
                    <p class="text-body-2">{{ product.description }}</p>
                </v-col>

                <v-col class="product-img pa-0 order-md-3" md="6">
                  <v-img :src="product.image" max-height="300"></v-img>
                </v-col>

                <v-col class="product-price order-md-2" md="6">
                    <h3>${{ product.price }}</h3>
                    <v-btn size="x-small" color="yellow" dark prepend-icon="mdi-cart" @click="addCart({ product: product._id, quantity:1 })" class="ml-auto px-5">加入購物車</v-btn>
                </v-col>

              </v-row>

            </v-card>
          </v-window-item>
        </v-window>

        <v-divider color="black" class="mx-5 my-5 mx-md-16 mt-md-2" thickness="1"></v-divider>

        <v-card-actions class="justify-space-around px-5 px-md-16 mx-md-16">
          <v-row class="px-6">
            <v-btn
              variant="plain"
              icon="mdi-arrow-left"
              @click="prev"
            ></v-btn>
            <v-col class="d-none d-sm-block" />
            <v-btn
              variant="plain"
              icon="mdi-arrow-right"
              @click="next"
            ></v-btn>
          </v-row>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-item-group
            v-model="onboarding"
            class="text-center d-flex"
            mandatory
          >
            <v-item
              v-for="n in products.length"
              :key="`btn-${n}`"
              v-slot="{ isSelected, toggle }"
              :value="n-1"
            >
              <v-btn
                :variant="isSelected ? 'outlined' : 'text'"
                icon="mdi-record"
                size="small"
                @click="toggle"
              ></v-btn>
            </v-item>
          </v-item-group>

        </v-card-actions>

      </v-card>
    </v-container>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios.js'
import { useUserStore } from '@/stores/user'

// 設一個變數 products 來暫存後端來的資料
const products = reactive([])
const onboarding = ref(0)
// 加入購物車需用到後端的使用者資料來操作
const user = useUserStore()
const { addCart } = user

const next = () => {
  onboarding.value = onboarding.value + 1 >= products.length
    ? 0
    : onboarding.value + 1
}
const prev = () => {
  onboarding.value = onboarding.value - 1 < 0
    ? products.length - 1
    : onboarding.value - 1
}

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

<style scoped>
  /* * { outline: solid 1px red; } */
  #GoodsArea {
    background-color: white;
  }
  .v-container--fluid {
    width: 100%;
    padding: 0;
    border-radius: 0;
  }

  @media screen and (max-width: 767px) {
    .product-img {
      position: absolute;
      top: 35%;
      left: -30%;
      z-index: -100;
      transform: rotate(-15deg);
    }

    .product-title p {
      width: 100%;
      max-height: 100px;
    }
    .product-price {
      flex-grow: 0;
      padding-bottom: 5%;
    }
    .product-price h3 {
      font-size: 53px;
      text-align: end;
      padding: 0 !important;
    }

    .product-img {
      position: absolute;
      top: 35%;
      left: -30%;
      z-index: -100;
    }
  }

  @media screen and (min-width: 767px) {
    .v-col-md-6  {
      flex: 0;
    }
    .product-price h3 {
      font-size: 30px;
    }
    .product-img {
      /* position: absolute;
      right: -20%; */
      transform: scale(1.3);
    }

}
</style>
