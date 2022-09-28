<template>
  <v-app-bar color="white" height="150" class="px-md-16" density="comfortable" id="navbar">
    <v-row class="align-center justify-space-between ma-0">
      <v-img :src="isDefaultImage ? logo : logobug" max-width="150" cover style="cursor: pointer" @click="$router.push('/')"></v-img>

    <!-- <v-spacer class="d-none"></v-spacer> -->
      <v-row class="d-none d-md-flex justify-md-end">
        <div class="d-flex justify-space-between">
          <v-btn to="/goods" variant="outlined" prepend-icon="mdi-information-outline" min-width="150" class="ml-5">Info</v-btn>
          <v-btn to="/goods" variant="outlined" prepend-icon="mdi-new-box" min-width="150" class="ml-5">News</v-btn>
          <v-btn to="/goods" variant="outlined" prepend-icon="mdi-account-star" min-width="150" class="ml-5">Artits</v-btn>
          <v-btn to="/goods" prepend-icon="mdi-gift" variant="outlined" min-width="150" class="ml-5">Goods</v-btn>
          <v-btn v-if="!isLogin" to="/register" prepend-icon="mdi-plus" variant="outlined" min-width="150" class="ml-5">Join</v-btn>
          <v-btn v-if="!isLogin" to="/login" prepend-icon="mdi-login" variant="outlined" min-width="150" class="ml-5">login</v-btn>
          <v-btn to="/cart" prepend-icon="mdi-cart" variant="outlined" min-width="150" class="ml-5">
            <v-badge color="error" dot floating v-if="cart > 0">Cart</v-badge>
            <span v-else>Cart</span>
          </v-btn>
          <v-btn v-if="isLogin" to="/orders" prepend-icon="mdi-format-list-bulleted" variant="outlined" min-width="150" class="ml-5">Orders</v-btn>
          <v-btn v-if="isLogin && isAdmin" to="/admin" prepend-icon="mdi-account" variant="outlined" cmin-width="150" class="ml-5">管理區</v-btn>
          <v-btn v-if="isLogin" prepend-icon="mdi-logout" @click='logout' variant="outlined" min-width="150" class="ml-5">logout</v-btn>
        </div>
      </v-row>
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
    <!-- <v-btn
      :icon= "showMenu ? 'mdi-close' : 'mdi-menu'"
      height="100%"
      width="100%"
      id="mdi-icon"
      @click="showMenu = true"
    ></v-btn> -->
    <v-icon
      :icon= "showMenu ? 'mdi-close' : 'mdi-menu'"
      id="mdi-icon"
      @click="showMenu = true"
    ></v-icon>
    <!-- <p class="iconName" v-if="!showMenu">menu</p>
    <p class="d-flex justify-center iconName" v-else>close</p> -->
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
const handleScroll = () => {
  console.log(window.scrollY)
  if (window.scrollY > 150) {
    return (isDefaultImage.value = false)
  }
  if (window.scrollY <= 50) {
    if (!isDefaultImage.value) {
      return (isDefaultImage.value = true)
    }
  }
}
// window.addEventListener('scroll', handleScroll)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ------------------------------------
// navberChange 導覽列滾動變化區
// ------------------------------------
let lastPos = 150 // 目前預設高度
window.document.addEventListener('scroll', function () {
  const navberChange = document.querySelector('#navbar .v-toolbar__content')
  const bg = document.querySelector('.bg-white')
  // const mdiIcon = document.querySelector('#navbar #mdi-icon.v-btn--icon')
  const mdiIcon = document.querySelector('#navbar #mdi-icon')
  const iconName = document.querySelector('#navbar p')
  // const img = document.querySelector('.v-img__img .v-img__img--cover')
  const currentPos = window.scrollY

  if (currentPos > lastPos) {
    // 讓nav bar消失
    navberChange.style.height = '55px'
    // bg.style.backgroundColor = 'transparent !important!'
    // bg.style.cssText = 'background-color: rgba(255,255,255,0.5) !important;'
    // mdiIcon.style.cssText = 'font-size: 2rem !important;'
    mdiIcon.style.cssText = 'transform: scale(1.5) !important;'
    iconName.style.visibility = 'hidden'
    // iconName.style.display = 'none'
    // iconName.style.cssText = 'display: none'
  } else {
    // 讓nav bar出現
    navberChange.style.height = '150px'
    mdiIcon.style.cssText = 'transform: scale(4) !important;'
    // iconName.style.display = 'block'
    // iconName.style.visibility = 'visible'
  }
  // 再記住現在位置，跟未來的位置做比較
  lastPos = currentPos
  // console.log(navberChange, window.scrollY)
  console.log(mdiIcon)
})

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

/* .v-dialog .v-overlay__content {
  margin: 0!important;
  width: 100%;
  height:100%;
} */

/* v-btn方式 */
/* #mdi-icon.v-btn--icon {
  font-size: 3rem !important;
  transform: scale(4) !important;
  padding-right: 20%;
  padding-top: 15%;
  transition: 0.5s all;
} */

/* v-icon方式 */
#mdi-icon {
  /* font-size: 3rem !important; */
  transform: scale(4) !important;
  padding-right: 60%;
  padding-top: 5%;
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
}

/* 控制menu彈出最高層(底下滑動不會跑掉) */
.v-overlay--absolute {
  position: fixed !important;
}

.v-overlay-container {
  min-width: 100% !important;
  opacity: 0.5;
  display: block !important;
  min-width: 100%;
}

/* 控制menu彈出的位置 */
.v-overlay {
  bottom: 0 !important;
  padding: 0 !important;
}

/* 調整彈出菜單的滿版*/
.v-list {
  min-width: 85vw;
  min-height: 100vh;
  padding: 5%;
  /* top: calc(20vh - 56px); */
  top: 64px;
}
.v-list-item {
  min-width: 100%;
  height: 10%;
  margin-bottom: 5%;
}
/* 調整彈出菜單的英文字跟中文字的排列*/
.v-list-item-title {
  width: 100%;
  min-width:100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal!important;
  position: relative;

}
/* 調整彈出菜單的背景底色 */
.v-menu .v-overlay__content > .v-card, .v-menu .v-overlay__content > .v-sheet, .v-menu .v-overlay__content > .v-list {
    /* background-color: #42b883 !important;
    color: black; */
    /* opacity: 0.95; */
}

/* 調整彈出菜單品項的底線*/
.v-list-item-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px dashed white;
}

/* 調整彈出菜單的英文字大小*/
.menu-title{
  font-size: 30px;
}
/* p.iconName {
  position: absolute;
  top:50px;
  left: 0;
  right: 0;
  bottom:0;
} */

</style>
