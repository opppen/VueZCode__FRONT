<template>
  <v-app-bar color="white" height="150" class="px-md-16" density="comfortable">
    <v-row class="align-center justify-space-between ma-0">
      <v-img :src="logo" max-width="150" cover style="cursor: pointer" @click="$router.push('/')"></v-img>

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
      @click="changeIcon"
      :icon= "data.icon"
      height="100%"
      width="100%"
      id="mdi-icon"
    ></v-btn>
    <span class="d-flex justify-center mt-n5">{{ data.text }}</span>
    <!-- <v-card>
      <v-card-actions>
        <v-icon @click="dialog = true" size="80">mdi-menu</v-icon>
      </v-card-actions>
    </v-card> -->

    <!-- <v-icon @click="dialog = true" size="80">mdi-menu</v-icon> -->

      <v-menu activator="#mdi-icon" transition="scroll-y-reverse-transition">
        <v-list flat lines="10">
          <v-list-item to="">
            <v-list-item-title>
              <span class="menu-title">News</span><span>// 最新消息</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="">
            <v-list-item-title>
              <span class="menu-title">Info</span><span>// 資訊</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="">
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
</template>

<script setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)
// const dialog = ref(false)
const drawer = ref(null)
const logo = ref(new URL('../assets/logo.png', import.meta.url).href)
const data = reactive({
  dialog: false,
  icon: 'mdi-menu',
  text: 'menu'
})

const changeIcon = () => {
  if (data.icon === 'mdi-menu') {
    data.icon = 'mdi-close'
    data.text = 'close'
    data.dialog = true
  } else {
    data.icon = 'mdi-menu'
    data.text = 'menu'
  }
}
// const data = reactive({
//   logo: new URL('../assets/logo.png', import.meta.url).href
// })

</script>

<style>
/* * { outline: solid 1px red; } */

.v-dialog .v-overlay__content {
  margin: 0!important;
  width: 100%;
  height:100%;
}

/* mdi-menu */
#mdi-icon.v-btn--icon .v-icon {
  --v-icon-size-multiplier: 3;
  transition: 1s all;
}

/* 讓菜單滿版 */
/* .v-menu .v-overlay__content {
  min-width: 100%!important;
} */

.v-overlay__content {
  /* top: 214px!important; */
  top: 64px!important;
  position: normal!important;
  bottom: 0!important;
  left: 0!important;
  height: 100%;
  /* min-height: 100%!important; */
  width: 80%;
  min-width: 100%!important;
  opacity: 0.98;
}

.v-list {
  width: 100%;
}

.v-list-item {
  width: 100%;
  height: 10%;
  margin-bottom: 5%;
}

.v-list-item-title {
  width: 100%;
  /* height: 50%; */
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
.menu-title{
  font-size: 65px;
}

</style>
