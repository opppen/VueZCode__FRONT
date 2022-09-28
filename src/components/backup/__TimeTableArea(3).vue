<template>
  <v-container>
    <v-col cols="12" class="px-5 px-md-0">
      <h1 class="text-h4 text-md-h2">&lt;- TimeTable -&gt;</h1>
      <div class="text-body-1 font-weight-bold">演出時間</div>
    </v-col>

    <v-row>

      <v-col>
        <v-card class="mx-auto">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover ></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red" variant="text">LineUp //表演陣容</v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>

                <v-timeline side="end">
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

            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover ></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red" variant="text">LineUp //表演陣容</v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>

                <v-timeline side="end">
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

            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover ></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red" variant="text">LineUp //表演陣容</v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>

                <v-timeline side="end">
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

            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

    </v-row>

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
const show = ref(true)
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

<style scoped>
  /* * { outline: solid 1px red; } */
.artist-img {
  position: relative;
}
.artist-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
}

@media screen and (max-width: 767px) {
    .v-img {
      height: 50px;
    }
    .v-timeline--vertical.v-timeline {
      grid-template-columns: 25% 5% auto;
      grid-row-gap: 1%;
    }

}

@media screen and (min-width: 767px) {
  .v-timeline--vertical.v-timeline {
    grid-template-columns: 10% 5% auto;
  }

}
</style>
