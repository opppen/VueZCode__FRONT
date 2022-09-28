<template>
  <v-card
      class="mx-auto my-5  mx-md-16"
      rounded="xl"
      variant="outlined"
    >
      <v-card-text class="pa-6">
        <p><slot name="time"></slot></p>
        <div class="text-h5 font-weight-bold py-3"><slot name="title"></slot></div>
        <div class="content">

        </div>

        <div>
          <slot name="content"></slot>
        </div>
        <!-- <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          cover
          class="mt-5"
        ></v-img> -->

        <slot name="v-img"></slot>
      </v-card-text>

  </v-card>

</template>

<script setup>
import { reactive, ref } from 'vue'

</script>

<style scoped>

  /* * { outline: solid 1px red; } */

</style>
