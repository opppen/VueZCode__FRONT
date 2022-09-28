<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
// 讓網頁一打開可以匯入
// (為了讓使用者登入後刷新頁面時不會登出，而且網頁打開後localStorage不會只存TOKEN也還會有使用者的資料)
// 讀取前台的stores/user.js/async getUser(去跟後端取登入的使用者資料)
// 讓pinia資料還在
// 應為App.vue是最外層。所以每頁都會抓到登入使用者的資料
import { useUserStore } from '@/stores/user.js'
const user = useUserStore()
user.getUser()

</script>
<style>
  /* @import "./assets/font/font.css"; */

/* .v-timeline-item__body {
    padding:0 !important;
} */

</style>
