<template>
  <v-card class="fill-height py-3" rounded="xl" color="white">
    <router-link :to="'/product/' + product._id">
      <!-- <v-img :src="product.image"></v-img> -->
      <v-img :src="product.image" height="150px"></v-img>
    </router-link>
    <v-card-title class="text-body-1 font-weight-bold" style="word-wrap:break-word; !important;">
      <!-- <router-link :to="'/product' + product._id">{{ product.name }}</router-link> -->
      {{ product.name }}
    </v-card-title>
  <v-card-subtitle>${{ product.price }}</v-card-subtitle>
  <v-card-actions class="align-center pb-2">
    <v-btn class="forSE" color="yellow" block variant="flat" type="submit" prepend-icon="mdi-cart" @click="addCart({ product: product._id, quantity:1 })">加入購物車</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()

// 去 stores/user.js (actions/addCart) 拿資料
// 然後 再後端請求 router.post('/cart', content('application/json'), auth.jwt, addCart)
const { addCart } = user

// defineProps 放陣列(寫法1)
// 來源是後端的models/products.js ?????????
// 還是 const { data } = await api.get('/products/')
const props = defineProps(['product'])
// 寫法2 ---------
// defineProps({
//   product: {
//     type: Object,
//     required: true,
//     default () {
//       return {
//         _id: '',
//         name: '',
//         price: 0,
//         category: '',
//         sell: false,
//         image: '',
//         description: ''
//       }
//     }
//   }
// })

</script>
<style scoped>
@media(max-width:374px) {
  ::v-deep .forSE .v-btn__content {
    font-size: 13px;
    letter-spacing: 0.1px;
  }
}
</style>
