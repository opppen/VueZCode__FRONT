<template>
  <v-app-bar color="white" height="120" class="px-md-16 px-5" density="comfortable" id="navbar">
    <v-row class="align-center justify-lg-space-between">

      <!-- ============== logo ==============  -->
      <v-col class="d-flex order-1 order-md-1 justify-md-center"><v-img :src="isDefaultImage ? logo : logobug" max-width="130" cover style="cursor: pointer" @click="$router.push('/')"></v-img></v-col>

      <!-- ============== MD以上會出現的菜單 ==============  -->
      <v-col cols="10" class="d-none d-md-flex order-md-2">
        <v-row class="justify-md-end align-center flex-lg-nowrap menu-md">
          <v-col><v-btn to="/info" variant="outlined" prepend-icon="mdi-information-outline" class="v-btn-add">Info</v-btn></v-col>
          <v-col><v-btn to="/news" variant="outlined" prepend-icon="mdi-new-box" class="v-btn-add">News</v-btn></v-col>
          <v-col><v-btn to="/artist" variant="outlined" prepend-icon="mdi-account-star" class="v-btn-add">Artist</v-btn></v-col>
          <v-col><v-btn to="/timetable" variant="outlined" prepend-icon="mdi-account-star" class="v-btn-add">TimeTable</v-btn></v-col>
          <v-col><v-btn to="/goods" prepend-icon="mdi-gift" variant="outlined" class="v-btn-add">Goods</v-btn></v-col>
          <v-col v-if="!isLogin"><v-btn to="/login" prepend-icon="mdi-login" variant="outlined" class="v-btn-add">login</v-btn></v-col>
          <v-col>
            <v-btn to="/cart" prepend-icon="mdi-cart" variant="outlined" class="v-btn-add">
              <v-badge color="error" dot offset-x="50"  offset-y="-3" v-if="cart > 0">Cart</v-badge>
              <span v-else>Cart</span>
            </v-btn>
          </v-col>
          <v-col v-if="isLogin"><v-btn  to="/orders" prepend-icon="mdi-format-list-bulleted" variant="outlined"  class="v-btn-add">Orders</v-btn></v-col>
          <v-col v-if="isLogin && isAdmin" class="flex-grow"><v-btn to="/admin" icon="mdi-account" size="x-small" style="font-size: 16px !important;"></v-btn></v-col>
          <v-col v-if="isLogin" class="flex-grow"><v-btn  icon="mdi-logout" size="x-small" @click='logout' style="font-size: 16px !important;"></v-btn></v-col>

            <!-- <v-btn v-if="!isLogin" to="/register" prepend-icon="mdi-plus" variant="outlined" class="v-btn">Join</v-btn> -->
        </v-row>
      </v-col>

      <!-- ============== RWD手機購物車部分 ==============  -->
      <v-col class="d-md-none d-flex order-1 cart-wrap flex-grow pa-0 mr-1" id="btn-cart">
          <v-btn to="/cart" icon="mdi-cart" variant="text" class="cart"></v-btn>
          <v-badge color="error" dot floating  offset-x="2"  offset-y="4"  v-if="cart > 0" class="cart-dot"></v-badge>
      </v-col>

      <!-- ============== RWD手機登入部分 ==============  -->
      <v-col class="d-md-none d-flex order-1 flex-grow pa-0 mr-1" id="btn-login">
        <v-btn to="/login" icon="mdi-login" variant="text" class="login"></v-btn>
      </v-col>

      <!-- ============== RWD手機菜單部分 ==============  -->
      <v-col class="d-md-none d-flex flex-end order-3 flex-grow" id="btn-menu">
        <v-icon
          :icon= "showMenu ? 'mdi-close' : 'mdi-menu'"
          class="mdi-icon"
          @click="showMenu = true"
        ></v-icon>

        <v-menu transition="scroll-y-reverse-transition" v-model="showMenu" id="v-menu" class="overflow-y-visible">
          <v-list flat lines="10"  rounded="xl">

            <v-list-item to="/info">
              <v-list-item-title>
                <span class="menu-title">Info</span><span class="text-body-2">// 資訊一覽</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/news">
              <v-list-item-title>
                <span class="menu-title">News</span><span class="text-body-2">// 最新消息</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/artist">
              <v-list-item-title>
                <span class="menu-title">Artist</span><span class="text-body-2">// 表演陣容</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/timetable">
              <v-list-item-title>
                <span class="menu-title">TimeTable</span><span class="text-body-2">// 表演時間</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/goods">
              <v-list-item-title>
                <span class="menu-title">Goods</span><span class="text-body-2">// 周邊商品</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/orders">
              <v-list-item-title>
                <span class="menu-title">Orders</span><span class="text-body-2">// 會員訂單</span>
              </v-list-item-title>
            </v-list-item>

            <!-- <v-list-item v-if="!isLogin" to="/register">
              <v-list-item-title>
                  <span class="menu-title">Join</span><span>// 註冊</span>
              </v-list-item-title>
            </v-list-item> -->

            <v-list-item v-if="!isLogin" to="/login">
              <v-list-item-title>
                <span class="menu-title">Login</span><span class="text-body-2">// 登入</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="isLogin" @click='logout'>
              <v-list-item-title>
                <span class="menu-title">Logout</span><span>// 登出</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="isLogin && isAdmin" to="/admin">
              <v-list-item-title>
                <span class="menu-title">Admin</span><span class="text-body-2">管理區</span>
              </v-list-item-title>
            </v-list-item>

            <img :src="logobug" class="logobug" />

          </v-list>
        </v-menu>
      </v-col>

    </v-row>

  </v-app-bar>
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
  // console.log(window.scrollY)
  if (window.scrollY > 120) {
    return (isDefaultImage.value = false)
  }
  if (window.scrollY <= 63) {
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
const lastPos = 120 // 目前預設高度
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
    navberChange.style.height = '63px'
    // bg.style.backgroundColor = 'transparent !important!'
    // bg.style.cssText = 'background-color: rgba(255,255,255,0.5) !important;'
    // mdiIcon.style.cssText = 'font-size: 2rem !important;'
    // mdiIcon.style.cssText = 'transform: scale(1.5) !important;'
    // iconName.style.visibility = 'hidden'
    // iconName.style.display = 'none'
    // iconName.style.cssText = 'display: none'
  } else {
    // 讓nav bar出現
    navberChange.style.height = '120px'
    // mdiIcon.style.cssText = 'transform: scale(4) !important;'
    // iconName.style.display = 'block'
    // iconName.style.visibility = 'visible'
  }
  // 再記住現在位置，跟未來的位置做比較
  // lastPos = currentPos
  // console.log(navberChange, window.scrollY)
  // console.log(mdiIcon)
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
/* * { outline: 1px solid red;} */

/* ============== 電腦版上的ｍenu___v-btn樣式 ============== */
.v-btn-add {
  min-width: 130px;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-left: 2%;
  height: 32px;
  border: 3px solid black;
  transition: .2s all;
}
.v-btn-add:nth-child(1) {margin-left: -0.5%;}
.menu-md > .v-col {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  padding-left: 5px!important;
  padding-right: 5px !important;
}

@media (min-width: 960px) and (max-width: 1280px) {
  .v-btn-add {
    font-size: 15px;
    letter-spacing: 0.5px;
    height: 25px;
    line-height: 25px;
    border: 1.5px solid black;
    transition: .2s all;
  }
}
.v-btn-add:hover {
  background-color: black;
  color: white;
}

/* .v-btn-add:hover::before {
  content:"";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  width: 100%;
  background-color:yellow;
  transition: 1s all;
} */

/*
@media screen and (min-width: 767px) {
} */
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
.mdi-icon {
  /* font-size: 3rem !important; */
  /* transform: scale(4) !important; */
  transform: scale(1.5);
  /* padding-right: 60%; */
  padding-top: 5%;
  transition: 1s all;
}

/* ============== 購物車ICON部分 ============== */
.cart, .login {
  transform: scale(1.2);
}

/* 讓菜單滿版 */
#mdi-menu.v-menu {
  min-width: 100%!important;
  width: 100% !important;
}

/* ============== 控制menu彈出最高層(底下滑動不會跑掉) ==============  */
.v-overlay--absolute {
  position: fixed !important;
}

/* ============== 調整彈出菜單的滿版(位置) ============== */
.v-list {
  min-width: 100vw;
  min-height: 100vh;
  padding: 5%;
  top: 64px;
  position: relative;

  /* top: calc(20vh - 56px); */
  /* opacity: 0.9; */

}
.v-list-item {
  min-width: 100%;
  height: 15%;
  margin-bottom: 10px;
}

/* ============== 調整彈出菜單的英文字跟中文字的排列============== */
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
/* ============== 調整彈出菜單的背景底色 ============== */
/* .v-menu .v-overlay__content > .v-card, .v-menu .v-overlay__content > .v-sheet, .v-menu .v-overlay__content > .v-list {
    background-color: #42b883 !important;
    color: black;
    opacity: 0.95;
} */

/* ============== 調整彈出菜單品項的底線 ============== */
.v-list-item-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px dashed white;
}

/* ============== 調整彈出菜單的英文字大小 ============== */
.menu-title{
  font-size: 40px;
  font-weight: 900;
  letter-spacing: -2px;
}

.flex-grow { flex-grow: 0; }

@media screen and (max-width: 375px) {
  .menu-title{
    font-size: 30px;
    font-weight: 900;
  }
  .v-list-item {
    margin-bottom: 2%;
  }

}
/* #v-menu {
  position: relative;
} */
.logobug {
  position: absolute;
  bottom: 230px;
  right: 100px;
  max-width: 50px;
}

</style>
