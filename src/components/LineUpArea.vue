<template>
<v-container class="my-16 py-16">
  <v-row class="align-center">
    <v-col cols="12" md="4" class="px-5 px-md-0">
      <h1 class="text-h4 text-md-h2">&lt;- LineUp -&gt;</h1>
      <div class="text-body-1 font-weight-bold">表演來賓</div>
    </v-col>

    <v-col cols="12" md="8">

      <v-sheet class="mx-auto" elevation="8">
        <v-slide-group selected-class="bg-success" active-class="success">
          <v-slide-group-item v-for="item in data.items" :key="item" v-slot="{ isSelected, toggle, selectedClass }" >
            <v-card class="artist" :class="['ma-2 ma-md-3', selectedClass]"  @click="toggle">
              <v-img :src="item.img" cover gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"/>
              <span class="mapbtn">
                <v-btn rounded="pill" :color="item.btnColor" density="compact">{{ item.time }}</v-btn>
              </span>
              <span class="site">
                <v-btn variant="outlined" size="small" icon>{{ item.site }}</v-btn>
              </span>
              <span class="artist-name text-h4 text-md-h2 font-weight-bold" elevation="24">{{ item.name }}</span>
              <span class="codeline text-body-2 d-none d-md-block" elevation="24">
                <!-- &lt; components &gt; -->
                &lt;link href="https://vuezcode.com.tw/components &gt;
              </span>
              <span class="codeline text-body-2 d-md-none" elevation="24">
                &lt; components &gt;
              </span>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    v-if="isSelected"
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
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
</script>

<style scoped lang="scss">
.v-sheet .v-slide-group__next {
  position: absolute !important;
  top:100px;
  left: 0;
  min-width: 0 !important;
  display: none;
}

.v-sheet{
  background: transparent;
}
/* .v-slide-group {
  display: block;
  position: relative;
} */
/* .v-sheet .v-slide-group .v-slide-group__prev {
  position: absolute;
  background-color:aquamarine;
  flex: none;

} */
.v-slide-group__prev, .v-slide-group__next {
  background: blue;
  position: relative;
  min-width: 40px;
  z-index: 2;
}

@media screen and (max-width: 767px) {
  .artist {
   /* width: 64vw;
   height: 36vw; */
   width: 45vw;
   height: 80vw;
   border-radius: 3.2vw;
  }
  /* .v-slide-group:nth-child(odd) .artist {
    transform: translateX(-40px);
  }
  .v-slide-group:nth-child(even) .artist {
    transform: translateX(0px);
  } */
}
@media screen and (min-width: 767px) {
  .artist {
   /* width: 16vw;
   height: 9vw; */
   width: 18vw;
   height: 32vw;
   border-radius: 1.6vw;
  }
  /* .v-slide-group:nth-child(odd) .artist {
    transform: translateX(-100px);
  }
  .v-slide-group:nth-child(even) .artist {
    transform: translateX(-50px);
  } */
}
.v-card:hover {
  border: 2px solid white;
  transition: all 0.2s;
}

.v-img {
  padding-bottom: 200% !important;
}

.v-img ::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-image: linear-gradient(to top,  rgba(0, 0, 0, 1)10%, transparent 60%); */
}
.elevation-8 {
  box-shadow: none !important;
}
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
</style>
