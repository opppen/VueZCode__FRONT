<template>
  <div id="info">
    <v-container>
      <v-col clos="12">
        <TitlePart ><template v-slot:text >Info</template></TitlePart>
      </v-col>

      <v-row>
        <!-- 左邊導覽列 --------------------------->
        <v-col cols="12" md="3">
          <v-card class="mx-3" max-width="200" color="transparent" rounded="0">
            <v-divider thickness="5px" color="red"></v-divider>
            <v-list bg-color="transparent">
              <v-list-item variant="plain" class="pa-1 my-3" @click='scroll("#ticket")'>TICKET</v-list-item>
              <v-list-item variant="plain" class="pa-1 my-3" @click='scroll("#areamap")'>AREAMAP</v-list-item>
              <v-list-item variant="plain" class="pa-1 my-3" @click='scroll("#access")'>access</v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" md="9">

          <v-card rounded="xl" class="pa-md-5" id="ticket">
            <v-card-text>
              <h2 class="text-h2 text-center pt-5">TICKET</h2>
              <v-divider thickness="6px" class="my-5"></v-divider>

              <v-col>
                <v-row class="pa-5 align-center pt-10">
                  <v-col cols="12" md="3" class="text-h4">預售票</v-col>
                  <v-col cols="12" md="5" class="text-h3 font-weight-bold">$1,200</v-col>
                  <v-col cols="12" md="4" class="text-subtitle-2">有效時間:2022/08/31</v-col>
                </v-row>
                <v-divider thickness="1px"></v-divider>

                <v-row class="pa-5 align-center pt-10">
                  <v-col cols="12" md="3" class="text-h4">一般票</v-col>
                  <v-col cols="12" md="5" class="text-h3 font-weight-bold">$1,400</v-col>
                  <v-col cols="12" md="4" class="text-subtitle-2">有效時間:2022/08/31</v-col>
                </v-row>
                <v-divider thickness="1px"></v-divider>
              </v-col>

               <v-col>
                <v-table density="compact" class="my-5">
                  <thead>
                    <tr>
                      <th class="text-left font-weight-black text-subtitle-2">
                        注意事項
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-body-1">
                    <tr>
                      <td>● 全區搖滾站席</td>
                    </tr>
                    <tr>
                      <td>● 預售一經完售即不開放現場票</td>
                    </tr>
                    <tr>
                      <td>● 活動為售票十日內，購票者需自行轉讓，無法退換票，請購買者注意</td>
                    </tr>
                    <tr>
                      <td>● 為了防疫登記順暢，本活動採實名制</td>
                    </tr>
                  </tbody>
                </v-table>

               </v-col>

            </v-card-text>
          </v-card>

          <v-card rounded="xl" class="pa-md-5 mt-16" id="areamap">
            <v-card-text>
              <h2 class="text-h2 text-center pt-5">AREAMAP</h2>
              <v-divider thickness="6px" class="my-5"></v-divider>

              <v-card theme="light mt-10">
                <v-img :src="mapImg"></v-img>
              </v-card>
              <v-row class="flex-column mt-5 px-5">
                <div class="text-h3 text-md-h1 font-weight-bold stage text-red">
                  A STAGE
                  <span class="serif">///////////////////////////</span>
                </div>
                <div class="text-h3 text-md-h1 font-weight-bold stage text-yellow">
                  B STAGE
                  <span class="serif">///////////////////////////</span>
                </div>
                <div class="text-h3 text-md-h1 font-weight-bold stage text-green">
                  C STAGE
                  <span class="serif">///////////////////////////</span>
                </div>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card rounded="xl" class="pa-md-5 mt-16" id="access">
            <v-card-text>
              <h2 class="text-h2 text-center pt-5">ACCESS</h2>
              <v-divider thickness="6px" class="my-5"></v-divider>

              <div class="content pa-2">
                <div class="item my-5">
                  <h3><v-icon class="pr-5 py-6">mdi-code-tags</v-icon>搭乘高鐵</h3>
                  <p class="text-body-2">高鐵桃園站下車，轉乘桃園捷運。</p>
                </div>

                <div class="item my-5">
                  <h3><v-icon class="pr-5 py-6">mdi-code-tags</v-icon>搭乘臺鐵</h3>
                  <p class="text-body-2">臺北站下車，轉乘臺北捷運、桃園捷運、公車。</p>
                </div>

                <div class="item my-5">
                  <h3><v-icon class="pr-5 py-6">mdi-code-tags</v-icon>搭乘客運</h3>
                  <p class="text-body-2">臺北轉運站下車（臺北火車站旁），轉乘臺北捷運、桃園捷運、公車。</p>
                </div>

                <div class="item my-5">
                  <h3><v-icon class="pr-5 py-6">mdi-code-tags</v-icon>自行開車</h3>
                  <p class="text-body-2">車位有限，請盡量利用大眾交通工具</p>
                </div>
              </div>

            </v-card-text>

          </v-card>

        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const mapImg = ref(new URL('../../assets/map.jpg', import.meta.url).href)
const scroll = async (hash) => {
  await nextTick()
  const el = document.querySelector(hash)
  if (el) {
    window.scrollTo(0, el.offsetTop)
    router.replace({ hash })
  }
}

onMounted(async () => {
  if (route.hash.length > 0) {
    scroll(route.hash)
  }
})

</script>
<style scoped>
/* * {outline: 1px solid red;} */
*, .text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6, .text-subtitle-1, .text-subtitle-2
, .text-body-1, .text-body-2, .text-button, .text-caption, .text-overline {
  font-family: 'Fira Code' !important;
}
.stage {
  max-height: 70px;
  overflow: hidden;
  position: relative;
}
.serif {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  /* color: white; */
  z-index: -1;
}

</style>
