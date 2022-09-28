<template>
<v-navigation-drawer expand-on-hover rail permanent>
  <v-list>
    <v-list-item :prepend-avatar="avatar" :title="account"></v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item to="/admin/products" title="商品管理" prepend-icon="mdi-shopping"></v-list-item>
      <v-list-item to="/admin/orders" title="訂單管理" prepend-icon="mdi-format-list-checkbox"></v-list-item>
      <v-list-item to="/admin/users/all" title="會員管理" prepend-icon="mdi-account-check"></v-list-item>
      <v-list-item to="/" title="回前台" prepend-icon="mdi-home"></v-list-item>
    </v-list>
  </v-list>
</v-navigation-drawer>
<v-main>
  <v-container fluid class="pa-10">
    <router-view />
  </v-container>
</v-main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'

const user = useUserStore()
const { avatar, account } = storeToRefs(user)
</script>
