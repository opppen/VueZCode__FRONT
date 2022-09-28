<template>

<v-row class="justify-center align-center overflow-hidden">
  <CodeWrapSet />
  <div id="not-found" class="text-center">

    <h1>" 404頁面 "</h1>
    <!-- <router-link to="/"></router-link> -->
    <v-btn to="/" size="x-large" width="80%" type="submit" variant="outlined" color="blue" class="mx-auto mt-5">回首頁</v-btn>
  </div>
</v-row>
</template>

<script setup>
import CodeWrapSet from '@/components/CodeWrapSet.vue'
</script>

<style scoped>
</style>
