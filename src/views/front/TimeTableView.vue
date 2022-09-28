<template>
  <div id="info">
    <CodeWrapSet />
    <v-container>
      <v-col clos="12">
        <TitlePart class="title"><template v-slot:text>TimeTable</template></TitlePart>
      </v-col>

      <v-row>

        <v-col cols="12" md="4">
          <v-card rounded="xl" color="red">
            <v-card-text>
              <v-row class="flex-md-column py-8">
                <v-col>
                  <v-alert border="start" density="default" color="white" variant="elevated" rounded="0" prominent class="pa-0 mb-5"  v-for="item in data.items" :key="item">
                    <div class="d-flex">
                      <div class="d-flex flex-column flex-md-row align-md-center justify-center justify-md-start pl-5 w-75">
                        <div class="text-h5 pr-2">{{ item.time }}</div>
                        <div class="text-caption">{{ item.name }}</div>
                      </div>
                      <div class="ml-auto w-25"><v-img :src="item.img" cover height="60"></v-img></div>
                    </div>
                  </v-alert>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card rounded="xl" color="yellow">
            <v-card-text>
              <v-row class="flex-md-column py-8">
                <v-col>
                  <v-alert border="start" density="default" color="white" variant="elevated" rounded="0" prominent class="pa-0 mb-5"  v-for="item in data.items" :key="item">
                    <div class="d-flex">
                      <div class="d-flex flex-column flex-md-row align-md-center justify-center justify-md-start pl-5 w-75">
                        <div class="text-h5 pr-2">{{ item.time }}</div>
                        <div class="text-caption">{{ item.name }}</div>
                      </div>
                      <div class="ml-auto w-25"><v-img :src="item.img" cover height="60"></v-img></div>
                    </div>
                  </v-alert>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card rounded="xl" color="green">
            <v-card-text>
              <v-row class="flex-md-column py-8">
                <v-col>
                  <v-alert border="start" density="default" color="white" variant="elevated" rounded="0" prominent class="pa-0 mb-5"  v-for="item in data.items" :key="item">
                    <div class="d-flex">
                      <div class="d-flex flex-column flex-md-row align-md-center justify-center justify-md-start pl-5 w-75">
                        <div class="text-h5 pr-2">{{ item.time }}</div>
                        <div class="text-caption">{{ item.name }}</div>
                      </div>
                      <div class="ml-auto w-25"><v-img :src="item.img" cover height="60"></v-img></div>
                    </div>
                  </v-alert>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import CodeWrapSet from '@/components/CodeWrapSet.vue'

const data = reactive({
  items: [
    {
      img: 'https://images.unsplash.com/photo-1571182124040-78c5cad7d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: "Wayne's So Sad",
      site: 'A',
      time: '12:00',
      btnColor: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      name: 'Deca joins',
      site: 'B',
      time: '13:00',
      btnColor: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'No Party For Cao Dong',
      site: 'C',
      time: '14:00',
      btnColor: 'yellow'
    },
    {
      img: 'https://images.unsplash.com/photo-1516651060273-564f1a573a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
      name: 'Elephant Gym',
      site: 'A',
      time: '15:00',
      btnColor: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1583795310794-4168d4ff1be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Sorry Youth',
      site: 'B',
      time: '16:00',
      btnColor: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1651754753431-359c25f6125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      name: 'Tizzy Bac',
      site: 'C',
      time: '17:00',
      btnColor: 'yellow'
    },
    {
      img: 'https://images.unsplash.com/photo-1608402550293-ac9d2496f4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      name: 'Loh Tsui Kweh Commune',
      site: 'A',
      time: '18:00',
      btnColor: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1626895684825-03b8655f26b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80',
      name: 'No-nonsense Collective',
      site: 'B',
      time: '19:00',
      btnColor: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1611762348135-5b09d2f0390d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Midnight Ping Pong',
      site: 'C',
      time: '20:00',
      btnColor: 'yellow'
    }
  ]
})

</script>
<style scoped>
/* * {outline: 1px solid red;} */
.text-body-2 {
  letter-spacing: 0.5px !important;
}
</style>
