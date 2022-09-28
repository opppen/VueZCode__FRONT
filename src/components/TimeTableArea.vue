<template>
  <v-container class="py-16 px-md-16" id="TimeTableArea">

    <v-col cols="12" md="12" class="px-md-0 text-center d-none d-md-block">
      <h1 class="font-weight-black text-h1">TimeTable</h1>
      <div class="text-body-1 font-weight-bold">&lt;-- 演出時間 --&gt;</div>
    </v-col>
    <v-col cols="12" md="12" class="px-0 text-center d-block d-md-none">
      <h1 class="font-weight-black">&lt;-TimeTable-&gt;</h1>
      <div class="text-body-1 font-weight-bold">演出時間</div>
    </v-col>

    <v-card rounded="rounded-xl" class="rounded-card">
        <!-- <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 text-basil">TIME</h1>
        </v-card-title> -->
        <v-img src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" height="200px" cover ></v-img>
        <v-card-title variant="outlined">
          Top western road trips
        </v-card-title>

        <v-card-subtitle class="mb-5">
          1,000 miles of wonder
        </v-card-subtitle>
        <v-divider thickness="1px"></v-divider>
        <v-tabs
          v-model="tab"
          background-color="black"
          grow
          slider-color="null"
          center-active
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          stacked
          centered
          class="my-7"
        >
          <!-- <v-tab
            v-for="item in items"
            :key="item"
            :value="item"
          >
            {{ item }}
          </v-tab> -->
           <v-divider vertical thickness="10px"></v-divider>
          <v-tab color="red"><v-icon class="pb-3">mdi-heart</v-icon>A stage</v-tab>
          <v-divider vertical thickness="10px"></v-divider>
          <v-tab color="green"><v-icon class="pb-3">mdi-pine-tree</v-icon>B stage</v-tab>
           <v-divider vertical thickness="10px"></v-divider>
          <v-tab color="yellow"><v-icon class="pb-3">mdi-star</v-icon>C stage</v-tab>
           <v-divider vertical thickness="10px"></v-divider>
        </v-tabs>
        <v-divider thickness="1px"></v-divider>

        <v-window v-model="tab">

          <v-window-item>
            <v-card flat color="transparent">
              <v-card-text>
                <v-timeline side="end" align="center" density="comfortable">
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

                    <v-timeline-item size="small" dot-color="red">
                      <template v-slot:opposite>
                        <span>20:00</span>
                      </template>
                      <v-card class="elevation-2">
                        <v-card-text class="d-flex jusitify-center align-center artist">
                            <v-img
                              src="https://images.unsplash.com/photo-1608402550293-ac9d2496f4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                              max-height="150px"
                              cover
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              class="artist-img"
                              >
                            </v-img>
                            <span class="text-body-2 text-md-h5 artist-name">Loh Tsui Kweh Commune</span>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                </v-timeline>

              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item>
            <v-card flat color="transparent">
              <v-card-text>
                <v-timeline>
                  <v-timeline-item size="small" dot-color="green">
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

                  <v-timeline-item size="small" dot-color="green">
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

                    <v-timeline-item size="small" dot-color="green">
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

                    <v-timeline-item size="small" dot-color="green">
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

                    <v-timeline-item size="small" dot-color="green">
                      <template v-slot:opposite>
                        <span>20:00</span>
                      </template>
                      <v-card class="elevation-2">
                        <v-card-text class="d-flex jusitify-center align-center artist">
                            <v-img
                              src="https://images.unsplash.com/photo-1608402550293-ac9d2496f4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                              max-height="150px"
                              cover
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              class="artist-img"
                              >
                            </v-img>
                            <span class="text-body-2 text-md-h5 artist-name">Loh Tsui Kweh Commune</span>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                </v-timeline>

              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item class="v-timeline-start">
            <v-card flat color="transparent">
              <v-card-text>
                <v-timeline side="start" align="center" density="comfortable">

                  <v-timeline-item size="small" dot-color="yellow">
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

                  <v-timeline-item size="small" dot-color="yellow">
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

                  <v-timeline-item size="small" dot-color="yellow">
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

                  <v-timeline-item size="small" dot-color="yellow">
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

                  <v-timeline-item size="small" dot-color="yellow">
                    <template v-slot:opposite>
                      <span>20:00</span>
                    </template>
                    <v-card class="elevation-2">
                      <v-card-text class="d-flex jusitify-center align-center artist">
                          <v-img
                            src="https://images.unsplash.com/photo-1608402550293-ac9d2496f4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            max-height="150px"
                            cover
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            class="artist-img"
                            >
                          </v-img>
                          <span class="text-body-2 text-md-h5 artist-name">Loh Tsui Kweh Commune</span>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>

                </v-timeline>
              </v-card-text>
            </v-card>
          </v-window-item>

        </v-window>
        <v-divider thickness="1px"></v-divider>

    </v-card>

  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios.js'
import { useUserStore } from '@/stores/user'

// 設一個變數 products 來暫存後端來的資料
const products = reactive([])
const tab = ref(null)
const show = ref(false)
// 加入購物車需用到後端的使用者資料來操作
const user = useUserStore()
const { addCart } = user

// ------------------------------------
// init 頁面打開讀入初始化 (取得商品資料讓前台有東西跑出來)
// ------------------------------------
const init = async () => {
  try {
    // 管理員的商品頁面 取得資料的方式(apiAuth)因為是要看全部商品以及看使用者(要有JWT攔截補上)
    // const { data } = await apiAuth.get('/products/all')
    // ---------------------------------------------------P

    // 所以我們這邊只要取得連結後端的 api 就好
    const { data } = await api.get('/products')
    // 將後端資料放入前端暫存區
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      title: 'ERROR //失敗',
      text: '伺服器錯誤'
    })
  }
}
init()

</script>

<style>
  /* * { outline: solid 1px red; } */

.artist-img {
  position: relative;
  width:100%;
  height: 80px;
}
.artist-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
}

.v-card-text .artist {
  padding: 2px;
}

/* .v-timeline-item__body {
    padding:0 !important;
} */

/* 放入style scoped 就沒有吃到。拿掉scoped或者放在外面的app.vue就會影響到(我有拿掉)*/
.v-timeline-start .v-timeline-item:nth-child(2n+1) .v-timeline-item__body {
  padding-inline-start:0 !important;
}

.rounded-card {
  border-radius: 30px;
}
</style>
