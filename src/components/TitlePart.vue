<template>
  <h1 class="title my-md-10 mt-5"><slot name="text"></slot></h1>
  <v-divider thickness="1px" color="white" class="mb-10"></v-divider>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>

.title {
  font-size: 50px;
  font-weight: 900;
}
@media screen and (max-width: 375px) {
  .title {
    font-size: 45px;
  }

}
@media screen and (min-width: 767px) {
  .title {
    font-size: 120px;
  }
}
</style>
