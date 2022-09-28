<template>
  <div id="arist">
    <div class="code-wrap">{{ code }}{{ code }}</div>
    <v-container>
      <v-col>
        <TitlePart ><template v-slot:text >Artis</template></TitlePart>
      </v-col>

      <v-row class="align-center flex-md-column">
        <v-col cols="12">
          <v-row class="align-center justify-center">
            <v-col v-for="item in data.items" :key="item" cols="12" md="6" lg="4">
              <v-card class="artist ma-2 mx-auto" rounded="xl" max-width="800" height="500" color="white">
                <v-img :src="item.img" height="320" cover />
                <v-card-text>
                    <div class="text-h6 font-weight-black"> {{ item.name }}</div>
                    <div class="py-3 text-body-2 font">
                      relating to or dependent on charity; charitable.<br>
                      "an eleemosynary educational institution."
                    </div>
                  </v-card-text>
                <span class="mapbtn">
                  <v-btn rounded="pill" :color="item.btnColor" density="compact">{{ item.time }}</v-btn>
                </span>
                <span class="site">
                  <v-btn variant="outlined" size="small" icon color="white">{{ item.site }}</v-btn>
                </span>
                <!-- <span class="codeline text-body-2 d-none d-md-block" elevation="24">
                  &lt;link href="https://vuezcode.com.tw/components &gt;
                </span>
                <span class="codeline text-body-2 d-md-none" elevation="24">
                  &lt; components &gt;
                </span> -->

              </v-card>

            </v-col>

          </v-row>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
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
      time: '12:00',
      btnColor: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'No Party For Cao Dong',
      site: 'C',
      time: '12:00',
      btnColor: 'yellow'
    },
    {
      img: 'https://images.unsplash.com/photo-1516651060273-564f1a573a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
      name: 'Elephant Gym',
      site: 'A',
      time: '12:00',
      btnColor: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1583795310794-4168d4ff1be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Sorry Youth',
      site: 'B',
      time: '12:00',
      btnColor: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1651754753431-359c25f6125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      name: 'Tizzy Bac',
      site: 'C',
      time: '12:00',
      btnColor: 'yellow'
    },
    {
      img: 'https://images.unsplash.com/photo-1608402550293-ac9d2496f4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      name: 'Loh Tsui Kweh Commune',
      site: 'A',
      time: '12:00',
      btnColor: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1626895684825-03b8655f26b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80',
      name: 'No-nonsense Collective',
      site: 'B',
      time: '12:00',
      btnColor: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1611762348135-5b09d2f0390d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Midnight Ping Pong',
      site: 'C',
      time: '12:00',
      btnColor: 'yellow'
    }
  ]
})

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
// ----------------------------------------------------------
// 訂單產生排序(最新的最上面)
// ----------------------------------------------------------
</script>

<style scoped>
/* .v-sheet .v-slide-group__next {
  position: absolute !important;
  top:100px;
  left: 0;
  min-width: 0 !important;
  display: none;
} */

/* .v-sheet{
  background: transparent;
} */
.text-h6 {
  font-family: 'Fira Code' !important;
  letter-spacing: -1px !important;
  line-height: 1.7rem !important;
}

/* @media screen and (max-width: 767px) {} */
@media screen and (min-width: 767px) {
  .title {
    font-size: 120px;
  }
}
.v-card:hover {
  border: 2px solid white;
  transition: all 0.2s;
}

/* .v-img ::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(to top,  rgba(0, 0, 0, 1)10%, transparent 60%);
} */

.mapbtn {
  position: absolute;
  top: 5%;
  left: 10%;
}
.site {
  position: absolute;
  top: 5%;
  right: 10%;
}

.artist-name {
  position: absolute;
  bottom: 10%;
  padding: 5%;
}
.codeline {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 5%;
  word-break: break-all;
  opacity: 0.8;
}

.code-wrap {
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}
</style>
