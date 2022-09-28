<template>
<div id="Homeview">
<!-- <img src='@/assets/img/logo.png' max-width="350" class="bg-grey-lighten-2">
<img src='../../assets/img/logo2.gif' max-width="350" class="bg-grey-lighten-2"> -->
<!-- <v-img :src="logo" max-width="100"/> -->
<!-- <v-img :src="images[0]"></v-img> -->
<!-- <v-img :src="imageUrl" /> -->
<!-- <img :src="images" /> -->

  <CarouselPart id="carouselHero"/>
  <NewsArea />
  <InfoArea />
  <ArtistArea />
  <TimeTableArea />
  <GoodsArea />

  <!-- <MarqueePart :data-speed="5" :data-pausable="false" :data-reverse="false" text="helloWorld" class="pa-0 overflow-hidden" style="height:30px; font-size:10px; background-color:blueviolet;"/> -->
  <!-- <MarqueePart data-speed="10" data-pausable="false" data-reverse="false" text="疫情指揮中心" style="background-color: red;"></MarqueePart> -->
  </div>
</template>

<script setup>
// import { reactive, ref } from 'vue'
import CarouselPart from '@/components/CarouselPart.vue'
import MarqueePart from '@/components/MarqueePart.vue'
import NewsArea from '@/components/NewsArea.vue'
import ArtistArea from '@/components/ArtistArea.vue'
import GoodsArea from '@/components/GoodsArea.vue'
import TimeTableArea from '@/components/TimeTableArea.vue'
import InfoArea from '@/components/InfoArea.vue'

// const images = reactive([
//   new URL('../../assets/logo.png', import.meta.url).href
// ])
// const logo = ref(new URL('@/assets/logo.png', import.meta.url).href)
// const imageUrl = new URL('@/assets/logo.png', import.meta.url).href

</script>

<style scoped>

/* #homeview {
  background: #34495E !important;
} */

.v-slide-group {
  display:block;
}

/* .v-slide-group__next {
  position: absolute;
  top:0;
  left: 0;
  min-width: 100px;
} */

/* #carouselHero { top: -150px; } */
</style>
