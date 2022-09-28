<template>
  <div class="code-wrap text-grey-darken-0">{{ code }}{{ code }}</div>
</template>

<script setup>
import { ref } from 'vue'
const code = ref(`
          <v-window-item>
            <v-card flat color="transparent">
              <v-card-text>
                <v-timeline side="end" align="center" density="comfortable" truncate-line="none">
                  <v-timeline-item size="small" dot-color="red">
                      <template v-slot:opposite>
                        <span>12:00</span>
                      </template>
                    <v-card class="elevation-2">
                      <v-card-text class="d-flex jusitify-center align-center artist">
                          <v-img
                            src="https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            max-height="150px"
                            cover
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            class="artist-img"
                            >
                          </v-img>
                          <span class="text-body-1 text-md-h5 artist-name">No Party For Cao Dong</span>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item size="small" dot-color="red">
                      <template v-slot:opposite>
                        <span>14:00</span>
                      </template>
                      <v-card class="elevation-2">
                        <v-card-text class="d-flex jusitify-center align-center artist">
                            <v-img
                              src="https://images.unsplash.com/photo-1516651060273-564f1a573a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
                              max-height="150px"
                              cover
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              class="artist-img"
                              >
                            </v-img>
                            <span class="text-body-1 text-md-h5 artist-name">Elephant Gym</span>
                        </v-card-text>
                      </v-card>
                  </v-timeline-item>

                    <v-timeline-item size="small" dot-color="red">
                      <template v-slot:opposite>
                        <span>16:00</span>
                      </template>
                      <v-card class="elevation-2">
                        <v-card-text class="d-flex jusitify-center align-center artist">
                            <v-img
                              src="https://images.unsplash.com/photo-1583795310794-4168d4ff1be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                              max-height="150px"
                              cover
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              class="artist-img"
                              >
                            </v-img>
                            <span class="text-body-1 text-md-h5 artist-name">Sorry Youth</span>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>

                    <v-timeline-item size="small" dot-color="red">
                      <template v-slot:opposite>
                        <span>18:00</span>
                      </template>
                      <v-card class="elevation-2">
                        <v-card-text class="d-flex jusitify-center align-center artist">
                            <v-img
                              src="https://images.unsplash.com/photo-1651754753431-359c25f6125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                              max-height="150px"
                              cover
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              class="artist-img"
                              >
                            </v-img>
                            <span class="text-body-1 text-md-h5 artist-name">Tizzy Bac</span>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
  `)
</script>

<style scoped>.code-wrap {
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  opacity: 0.6;
}
</style>
