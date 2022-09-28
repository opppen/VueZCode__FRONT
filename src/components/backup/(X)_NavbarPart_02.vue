<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        color="rgba(255,255,255,1)"
        v-model="drawer"
        temporary
        location="right"
        width="300"
        height="100vh"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav  class="tiles">
          <v-list-item to="/goods" prepend-icon="mdi-account-star" title="Artist //登場卡司" value="artist" />
          <v-list-item to="/goods" prepend-icon="mdi-information-outline" title="Info //資訊" value="info" />
          <v-list-item to="/goods" prepend-icon="mdi-volume-high" title="News //最新消息" value="news" />
          <v-list-item to="/goods" prepend-icon="mdi-gift" title="Goods //週邊商品" value="goods" />
          <v-list-item v-if="!isLogin" to="/register" prepend-icon="mdi-plus" title="Join //註冊" value="join" />
          <v-list-item v-if="!isLogin" to="/login" prepend-icon="mdi-login" title="login //登入" value="login" />
          <v-list-item v-if="isLogin" @click='logout' prepend-icon="mdi-logout" title="logout //登出" value="logout" />
          <v-list-item v-if="isLogin" to="/orders" prepend-icon="mdi-format-list-bulleted" title="Orders //訂單" value="orders" />
          <v-list-item v-if="isLogin" to="/admin" prepend-icon="mdi-account" title="管理區" value="logout" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px" contained>
        <div class="d-flex justify-end h-100">
          <v-btn
            @click.stop="drawer = !drawer"
          >
            <v-icon size="70">mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { reactive, ref } from 'vue'

const drawer = ref(null)

</script>

<style scoped>
/* .ass {
    z-index: 999;
  } */
</style>
