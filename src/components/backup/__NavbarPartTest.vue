<template>
  <v-card class='mx-auto overflow-hidden w-100' elevation='10'>
      <v-app-bar
        hide-on-scroll
        scroll-target="#scrolling-techniques" scroll-threshold='35'
        height='100' color="orange darken-3" tile absolute dark :elevation='isIntersecting ? 1 : 0'
      >
        <img :src="logo" width='45'>
        <v-toolbar-title class='headline'>&nbsp;&nbsp;Cardboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>
      <v-sheet
        id='scrolling-techniques' class="overflow-y-auto"
      >
        <v-card class='pa-6 mt-12' elevation='4'>
          <v-card-actions class='justify-center mt-3'>
            <v-btn color='light-blue accent-2' dark class='px-4'>
              <v-icon left>input</v-icon>
              GET IT
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-sheet>
  </v-card>
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
