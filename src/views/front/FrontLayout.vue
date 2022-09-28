<template>
  <v-app-bar class="pa-0">
    <MarqueePart :data-speed="2" :data-pausable="false" :data-reverse="null">
      <template v-slot:text >Hello, World!</template>
    </MarqueePart>
  </v-app-bar>

  <NavbarPart />

  <v-main>
    <router-view />
  </v-main>

  <FooterPart />

  <BottomNavigation class="d-md-none"></BottomNavigation>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import MarqueePart from '@/components/MarqueePart.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import NavbarPart from '@/components/NavbarPart.vue'
import FooterPart from '@/components/FooterPart.vue'
// import NavbarPart from '@/components/NavbarPartTest.vue'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)

// const logo = ref(new URL('../../assets/logo.png', import.meta.url).href)

// const marquee = () => {
//   // if (data.timer != null) return
//   setInterval(() => {
//     // 獲取第一個字符
//     const startMeg = data.meg.substring(0, 1)
//     // 獲取後面所有的字符
//     const endMeg = data.meg.substring(1)
//     // 重新拼接mesg
//     data.meg = endMeg + startMeg
//   }, 300)
// }
// marquee()
</script>

<style scoped>

/* * { outline: solid 1px red; } */

</style>

<!-- /*
 <v-badge color="error" dot floating> 購物車上面的紅點dot 往上移floating

 @click="$router.push('/')
 https://ithelp.ithome.com.tw/articles/10239165?sc=iThomeR
*/ -->
