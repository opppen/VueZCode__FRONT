<template>
  <v-container class="py-16 px-md-16" id="NewsArea">
    <!-- <v-col cols="12" md="12" class="px-md-0 text-center d-none d-md-block">
      <h1 class="font-weight-black text-h2">News</h1>
      <div class="text-body-1 font-weight-bold">&lt;- 最新消息 -&gt;</div>
    </v-col> -->
    <v-col cols="12" md="12" class="px-md-0 text-center d-none d-md-block">
      <h1 class="font-weight-black text-h1">News</h1>
      <div class="text-body-1 font-weight-bold">&lt;-- 最新消息 --&gt;</div>
    </v-col>
    <v-col cols="12" md="12" class="px-0 text-center d-block d-md-none">
      <h1 class="font-weight-black">&lt;-- News --&gt;</h1>
      <div class="text-body-1 font-weight-bold">最新消息</div>
    </v-col>

    <v-row>

      <v-col cols="12" md="12">
        <v-expansion-panels variant="inset">

          <v-expansion-panel class="mt-2" ripple>
            <v-expansion-panel-title>
              <v-row>
                <v-col cols="12" md="10" outlined class="text-caption pe-6 ellipsis">
                  <span class="d-block d-md-inline pe-5 pb-2">
                    <v-btn size="x-small" color="red" class="d-md-inline">2022/08/31</v-btn>
                  </span>
                  因為經費不足。取消演出！
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-2">
                sorry!!
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel bg-color="null" class="mt-2"  ripple>
            <v-expansion-panel-title>
              <v-row>
                <v-col cols="12" md="10" class="text-caption pe-6 ellipsis">
                  <span class="d-block d-md-inline pe-5 pb-2">
                    <v-btn size="x-small" color="green" class="d-md-inline">2022/08/30</v-btn>
                  </span>
                  依照疾病管制署規定，為維持國內 COVID-19（新冠肺炎）疫情之穩定控制，本活動採行以下防疫相關措施：
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-2">
                所有參與人員需隨身攜帶身份證、手機（活動期間保持開機狀態），皆須配戴口罩並消毒手部，方得入場活動場地出入口設置體溫檢測站，有發燒情況者 (耳溫≧38°C、額溫≧37.5°C) 不得入場。建立參與人員名冊：所有參加者於活動前皆須填寫「實聯制登記表單」，並於手環配戴處確認已填妥後，方得入場。劃定為飲食區以外之場域，一律不得飲食（補充水分除外）
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel bg-color="null" class="mt-2"  ripple>
            <v-expansion-panel-title>
              <v-row>
                <v-col cols="12" md="10" class="text-caption pe-6 ellipsis">
                  <span class="d-block d-md-inline pe-5 pb-2">
                    <v-btn size="x-small" color="yellow" class="d-md-inline">2022/08/30</v-btn>
                  </span>
                  倒數三天
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-2">
                天阿。只剩三天！來得及嗎？大家都還好嗎？希望能夠完成！
            </v-expansion-panel-text>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

// const ellipsis = (value) => {
//   if (!value) return ''
//   if (value.length > 10) {
//     return value.slice(0, 10) + '...'
//   }
//   return value
// }
const len = 2
const ellipsis = document.querySelectorAll('.ellipsis')
ellipsis.forEach((item) => {
  if (item.innerHTML.length > len) {
    const txt = item.innerHTML.substring(0, len) + '...'
    item.innerHTML = txt
  }
})

</script>

<style scoped>
body,html {
  background: #34495E !important;
}
.text-caption {
  text-align: left;
}

.bg-green {
  border-radius: 4px;
}

@media screen and (max-width: 767px) {
  .ellipsis {
    max-width: 250px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow : ellipsis;
  }
}

</style>
