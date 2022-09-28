<template>
  <v-app-bar color="white" height="150" class="px-md-16" density="comfortable" id="navbar">
    <v-row class="align-center justify-space-between ma-0">
      <v-img :src="isDefaultImage ? logo : logobug" max-width="150" cover style="cursor: pointer" @click="$router.push('/')"></v-img>

    <!-- <v-spacer class="d-none"></v-spacer> -->

      <div class="d-none d-md-flex justify-md-end">
        <v-btn to="/goods">//資訊 Info</v-btn>
        <v-btn to="/goods" prepend-icon="mdi-gift">Goods //週邊商品</v-btn>
        <v-btn v-if="!isLogin" to="/register" prepend-icon="mdi-plus">Join //註冊</v-btn>
        <v-btn v-if="!isLogin" to="/login" prepend-icon="mdi-login">login //登入</v-btn>
        <v-btn to="/cart" prepend-icon="mdi-cart">
          <v-badge color="error" dot floating v-if="cart > 0">Cart //購物車</v-badge>
          <span v-else>Cart //購物車</span>
        </v-btn>
        <v-btn v-if="isLogin" to="/orders" prepend-icon="mdi-format-list-bulleted">Orders //訂單</v-btn>
        <v-btn v-if="isLogin && isAdmin" to="/admin" prepend-icon="mdi-account">管理區</v-btn>
        <v-btn v-if="isLogin" prepend-icon="mdi-logout" @click='logout'>登出</v-btn>
      </div>

    </v-row>
    <!-- <div class="d-md-none">
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-menu"
            size="x-large"
            v-bind="props"
            style="
              font-size:60px;
            "
            class="d-flex px-10"
          >
          </v-btn>
        </template>
        <div class="d-flex flex-column" style="background-color:brown;">
          <v-btn to="/goods" prepend-icon="mdi-gift">Info //資訊</v-btn>
          <v-btn to="/goods" prepend-icon="mdi-gift">Goods //週邊商品</v-btn>
          <v-btn v-if="!isLogin" to="/register" prepend-icon="mdi-plus">Join //註冊</v-btn>
          <v-btn v-if="!isLogin" to="/login" prepend-icon="mdi-login">login //登入</v-btn>
          <v-btn to="/cart" prepend-icon="mdi-cart">
            <v-badge color="error" dot floating v-if="cart > 0">Cart //購物車</v-badge>
            <span v-else>Cart //購物車</span>
          </v-btn>
          <v-btn v-if="isLogin" to="/orders" prepend-icon="mdi-format-list-bulleted">Orders //訂單</v-btn>
          <v-btn v-if="isLogin && isAdmin" to="/admin" prepend-icon="mdi-account">管理區</v-btn>
          <v-btn v-if="isLogin" prepend-icon="mdi-logout" @click='logout'>登出</v-btn>
        </div>
      </v-menu>
    </div> -->

  <div class="d-md-none" id="menu-btn">
    <v-btn
      :icon= "showMenu ? 'mdi-close' : 'mdi-menu'"
      height="100%"
      width="100%"
      id="mdi-icon"
      @click="showMenu = true"
    ></v-btn>
    <p class="d-flex justify-center mt-n3 iconName" v-if="!showMenu">menu</p>
    <p class="d-flex justify-center mt-n3 iconName" v-else>close</p>
    <!-- <v-card>
      <v-card-actions>
        <v-icon @click="dialog = true" size="80">mdi-menu</v-icon>
      </v-card-actions>
    </v-card> -->

    <!-- <v-icon @click="dialog = true" size="80">mdi-menu</v-icon> -->

      <v-menu transition="scroll-y-reverse-transition" v-model="showMenu" id="mdi-menu">
        <v-list flat lines="10">

          <v-list-item to="/">
            <v-list-item-title>
              <span class="menu-title">News</span><span>// 最新消息</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item to="/">
            <v-list-item-title>
              <span class="menu-title">Info</span><span>// 資訊</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item to="/">
            <v-list-item-title>
              <span class="menu-title">Arits</span><span>// 表演陣容</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item to="/goods">
            <v-list-item-title>
              <span class="menu-title">Goods</span><span>// 周邊商品</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!isLogin" to="/register">
            <v-list-item-title>
                <span class="menu-title">Join</span><span>// 註冊</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!isLogin" to="/login">
            <v-list-item-title>
              <span class="menu-title">Login</span><span>// 登入</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!isLogin" to="/login">
            <v-list-item-title>
              <span class="menu-title">Logout</span><span>// 登出</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="isLogin && isAdmin" to="/admin">
            <v-list-item-title>
              <span class="menu-title">Admin</span><span>管理區</span>
            </v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
    <!-- <v-dialog
      v-model="data.dialog"
      height="500px"
      width="70%"
      location="strat"
      class="d-flex justify-md-end"
    >
    </v-dialog> -->
    <!-- <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open In
        </v-btn>
      </template>
      <v-list>
        <v-subheader>push</v-subheader>
      </v-list>
    </v-bottom-sheet> -->
  </div>
  </v-app-bar>
  <!-- <CarouselPart id="carouselHero"/> -->
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
// import CarouselPart from '@/components/CarouselPart.vue'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)
// const dialog = ref(false)
const drawer = ref(null)
const showMenu = ref(false)
const logo = ref(new URL('../assets/logo.png', import.meta.url).href)
const logoRow = ref(new URL('../assets/logo2.png', import.meta.url).href)
const logobug = ref(new URL('../assets/logo3.png', import.meta.url).href)
const isDefaultImage = ref(true)

// ------------------------------------
// handleScroll 滾動時變化圖片
// ------------------------------------
// const handleScroll = () => {
//   console.log(window.scrollY)
//   if (window.scrollY > 150) {
//     return (isDefaultImage.value = false)
//   }
//   if (window.scrollY <= 50) {
//     if (!isDefaultImage.value) {
//       return (isDefaultImage.value = true)
//     }
//   }
// }
// // window.addEventListener('scroll', handleScroll)

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll)
// })

// ------------------------------------
// navberChange 導覽列滾動變化區
// ------------------------------------
// const lastPos = 150 // 目前預設高度
// window.document.addEventListener('scroll', function () {
//   const navberChange = document.querySelector('#navbar .v-toolbar__content')
//   const mdiIcon = document.querySelector('#navbar #mdi-icon.v-btn--icon')
//   const iconName = document.querySelector('#navbar p')
//   // const img = document.querySelector('.v-img__img .v-img__img--cover')
//   const currentPos = window.scrollY

//   if (currentPos > lastPos) {
//     // 讓nav bar消失
//     navberChange.style.height = '55px'
//     mdiIcon.style.cssText = 'font-size: 2rem !important;'
//     // iconName.style.visibility = 'hidden'
//   } else {
//     // 讓nav bar出現
//     navberChange.style.height = '150px'
//     // mdiIcon.style.cssText = 'font-size: 3rem !important;'
//   }
//   // 再記住現在位置，跟未來的位置做比較
//   // lastPos = currentPos
//   // console.log(navberChange, window.scrollY)
//   console.log(mdiIcon)
// })

// const data = reactive({
//   activator: false,
//   icon: 'mdi-menu',
//   text: 'menu'
// })

// const changeIcon = () => {
//   if (data.icon === 'mdi-menu') {
//     data.icon = 'mdi-close'
//     data.text = 'close'
//     data.dialog = true
//   } else {
//     data.icon = 'mdi-menu'
//     data.text = 'menu'
//   }
// }
</script>

<style scoped>
#navber .sticky {
  height: 80px !important;
}
/* .v-dialog .v-overlay__content {
  margin: 0!important;
  width: 100%;
  height:100%;
} */

/* mdi-menu */
#mdi-icon.v-btn--icon {
  font-size: 3rem !important;
  transition: 1s all;
}

/* 讓菜單滿版 */
/* #mdi-menu.v-menu {
  min-width: 100%!important;
  width: 100% !important;
} */

#mdi-menu .v-overlay .v-overlay__content {
  /* top: 214px!important; */
  /* top: 64px !important; */
  /* position: normal !important;
  bottom: 0 !important;
  left: 0!important;
  height: 100%; */
  /* min-height: 100%!important; */
  /* width: 80%;
  min-width: 100% !important;
  opacity: 0.98; */
  width: 100% !important;
  min-width: 100% !important;
}
.v-overlay--absolute {
  position: fixed !important;
  width: 100% !important;
  min-width: 100% !important;
}
.v-overlay-container {
  min-width: 100% !important;
  opacity: 0.5;
}

/* 控制menu滿版跟範圍位置(DevTools) */
.v-overlay__content {
  width: 100% !important;
  min-width: 100% !important;
  top: 64px !important;
}
/* 控制menu彈出的位置 */
/* .v-overlay {
  top: 0 !important;
  padding: 0 !important;
} */

.v-list {
  width: 100%;
  padding: 0;
  /* background: rgb(var(--v-theme-surface)) !important; */
}

/* .v-list-item {
  width: 100%;
  height: 10%;
  margin-bottom: 5%;
} */

.v-list-item-title {
  width: 100%;
  min-width:100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal!important;
  position: relative;
}

.v-list-item-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px dashed white;
}

/* .menu-title{
  font-size: 65px;
} */

</style>
