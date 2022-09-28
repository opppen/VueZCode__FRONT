<template>
  <!-- <v-app-bar> -->
    <!-- <div class="scroll mx-auto">
      <div class="marquee">{{ data.meg }}</div>
      <div class="marquee">{{ data.meg }}</div>
    </div> -->
    <!-- <div class="mm">
      <ul>
        <li>123</li>
        <li>abc</li>
      </ul>
    </div> -->
<!-- <slot name="header">Default Header</slot> -->
  <!-- </v-app-bar> -->

  <div class="marquee3k"
    :data-speed = dataSpeed
    :data-reverse = dataReverse
    :data-pausable = dataPausable
  >
  <!-- 綁定資料方式(少了樣式指定) -->
    <!-- <h1>{{ text }}</h1> -->

  <!-- slot具名方式(應該可以套自己想要的格式?) -->
    <h1><slot name="text"></slot></h1>
    <!-- <slot></slot> -->
  </div>

</template>

<script setup>
import { onMounted, defineProps } from 'vue'
import Marquee3k from 'marquee3000'
onMounted(() => {
  Marquee3k.init()
  Marquee3k.refreshAll()
})

// 跑馬燈的文字內容從外面傳進來 ?
const props = defineProps({
  // text: {
  //   type: String,
  //   required: true,
  //   default () {
  //     return ''
  //   }
  // },
  // 速度
  dataSpeed: {
    type: Number,
    required: false,
    default () {
      return 1
    }
  },
  // 方向
  dataReverse: {
    type: Boolean,
    required: false,
    default () {
      return ''
    }
  },
  // hover 暫停
  dataPausable: {
    type: Boolean,
    required: false,
    default () {
      return ''
    }
  }
})

//  針對單一數據的話寫法
// const props = defineProps({
//   data: {
//     type: Object,
//     required: true,
//     default () {
//       return {
//         pausable: '',
//         reverse: '',
//         speed: '',
//         text: ''
//       }
//     }
//   }
// })
/*

    <div class="marquee3k"
        data-speed="0.25" → play around here
        data-reverse="bool" → default: R to L / T to B
        data-pausable="bool" → Pause marquee on hover>
        <!--you can even have inline images,
        or any kind of html -->
        <h1>Some marquee content</h1>
    </div>

*/
</script>

<style scoped>
.marquee3k__copy {
  padding-right: 20px;
  box-sizing: border-box;
  /* background-color: red; */
}

.diagonal-marquee {
  transform: rotate(150deg);
}

/* 方法1 (純CSS動畫) */
.scroll {
  display: flex;
  width:100%;
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
}
.marquee {
  white-space: nowrap;
  text-transform: uppercase;
  animation: scroll 40s linear infinite;
  /* animation-delay: -20s; */
  background-color: blue;
}
.marquee:nth-child(2) {
  animation: scroll2 40s linear infinite;
  animation-delay: -20s;
  background-color: green;
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes scroll2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}

/* 方法2 (純CSS動畫) */
.mm {
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
}
.mm ul {
  display: flex;
  animation: scroll3 20s linear infinite;
}
.mm ul li {
margin-right: 2em;
}
@keyframes scroll3 {
  0% {
    left: 100%;
    transform: translateX(0%);
  }

  100% {
    left: 0;
    transform: translateX(-100%);
  }
}

/* 方法3 (文字+文字) */
/* // const marquee = () => {
//   // if (data.timer != null) return
//   setInterval(() => {
//     // 獲取第一個字符
//     const startMeg = data.meg.substring(0, 1)
//     // 獲取後面所有的字符
//     const endMeg = data.meg.substring(1)
//     // 重新拼接mesg
//     data.meg = endMeg + startMeg
//   }, 300)
// }
// marquee() */
</style>
