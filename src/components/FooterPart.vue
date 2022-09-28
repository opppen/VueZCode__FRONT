<template>
  <v-container fluid class="pa-0">
    <div class="overflow-hidden code">{{ code }}</div>
  </v-container>
  <v-container class="py-md-16 pb-10" id="footer">
    <h1 class="text-center">HaveNiceDay</h1>
    <v-divider class="my-3 divider"></v-divider>
    <v-footer color="transparent">
      <v-row class="justify-space-between align-center">
        <v-col cols="5" md="4">
          <v-img :src="logoImg" max-width="100"></v-img>
        </v-col>
        <v-col cols="7" md="4" class="d-flex order-md-2">
          <v-row class="justify-end">
            <v-btn class="mx-n1 mx-sm-1 text-white" variant="text" icon="mdi-facebook"></v-btn>
            <v-btn class="mx-n1 mx-sm-1 text-white" variant="text" icon="mdi-twitter"></v-btn>
            <v-btn class="mx-n1 mx-sm-1 text-white" variant="text" icon="mdi-linkedin"></v-btn>
            <v-btn class="mx-n1 mx-sm-1 text-white" variant="text" icon="mdi-instagram"></v-btn>
          </v-row>
        </v-col>
        <v-col class="text-center my-5 mt-md-4 order-md-1" style="color:#9E9E9E;" cols="12" md="4">
          &copy;Copyright {{ new Date().getFullYear() }} — <strong>VueZCode</strong>
          <span class="d-block postscript pt-2">網站內容取自網路為學習用途無商業使用</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>

  <!-- <v-container class="py-16" id="footer">
    <v-footer color="transparent">
      <v-row justify="center" no-gutters >
        <v-col cols="2">
          <v-img :src="logoImg"></v-img>
        </v-col>
        <v-col></v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4">
          <v-row flex-row>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-facebook"></v-btn>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-twitter"></v-btn>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-linkedin"></v-btn>
            <v-btn class="mx-2 text-white" variant="text" icon="mdi-instagram"></v-btn>
          </v-row>
        </v-col>
        <v-divider class="my-3 my-md-8"></v-divider>
        <v-col class="text-center text-white my-5 mt-md-4" cols="12">
          &copy;Copyright s{{ new Date().getFullYear() }} — <strong>VueZCode</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container> -->
</template>

<script setup>
import { ref } from 'vue'
const code = ref(`
<v-window-item><v-card flat color="transparent"><v-card-text><v-timeline side="end" align="center" density="comfortable" truncate-line="none"><v-timeline-item size="small" dot-color="red"><template v-slot:opposite><span>12:00</span></template>
<v-card class="elevation-2"><v-card-text class="d-flex jusitify-center align-center artist"><v-img src="https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" max-height="150px" cover gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="artist-img"></v-img>

  `)
const logoImg = ref(new URL('../assets/logo-white.png', import.meta.url).href)

</script>

<style scoped>

  /* * { outline: solid 1px red; } */

.rounded-card {
  border-radius: 30px;
}
.v-container .divider {
  width: 100%;
}
h1  {
  font-size: 150px;
  letter-spacing: -50px;
  font-weight: 900;
  opacity: 0.3;
  overflow:hidden;
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 60px;
    letter-spacing: -15px;
  }
}
.code {
  width: 100%;
  height: 50px;
  word-break: break-all;
  color: rgba(255,255,255,0.3);

}
.postscript {
  font-size: 12px;
  letter-spacing: 0.5px;
  color: rgba(255,255,255,0.3);
}
</style>
