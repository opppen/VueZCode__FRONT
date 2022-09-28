<template>
  <div id="news">

    <CodeWrapSet />
      <v-container>
        <v-col clos="12">
          <TitlePart ><template v-slot:text >News</template></TitlePart>
        </v-col>

          <v-col cols="12">
            <v-expansion-panels ripple eager>

              <v-expansion-panel>

                <v-expansion-panel-title class="d-flex align-end px-sm-8 py-sm-6">
                  <v-row class="">
                    <v-col  cols="12"><v-btn size="x-small" color="red">2022/08/31</v-btn></v-col>
                    <v-col cols="12" class="py-0 mb-1 d-flex justify-space-between align-end w-100">
                      <span class="text-body-1 text-md-h6 text-left w-75">因為經費不足。取消演出！</span>
                      <div class="pb-1 pr-2 text-caption d-none d-sm-block">Read more</div>
                    </v-col>
                  </v-row>

                </v-expansion-panel-title>

                <v-expansion-panel-text class="text-body-2">
                  <h1 class="pa-5 text-center">sorry!!</h1>
                </v-expansion-panel-text>

              </v-expansion-panel>

              <v-expansion-panel class="mt-5">

                <v-expansion-panel-title class="d-flex align-end px-sm-8 py-sm-6">

                  <v-row class="">
                    <v-col cols="12"><v-btn size="x-small" color="green">2022/08/30</v-btn></v-col>
                    <v-col cols="12" class="py-0 mb-1 d-flex justify-space-between align-end w-100">
                      <div class="text-body-1 text-md-h6 text-left w-75">依照疾病管制署規定，為維持國內 COVID-19（新冠肺炎）疫情之穩定控制，本活動採行以下防疫相關措施：</div>
                      <div class="pb-1 pr-2 text-caption d-none d-sm-block">Read more</div>
                    </v-col>
                  </v-row>

                </v-expansion-panel-title>

                <v-expansion-panel-text class="text-body-2">
                  所有參與人員需隨身攜帶身份證、手機（活動期間保持開機狀態），皆須配戴口罩並消毒手部，方得入場活動場地出入口設置體溫檢測站，有發燒情況者 (耳溫≧38°C、額溫≧37.5°C) 不得入場。建立參與人員名冊：所有參加者於活動前皆須填寫「實聯制登記表單」，並於手環配戴處確認已填妥後，方得入場。劃定為飲食區以外之場域，一律不得飲食（補充水分除外）
                </v-expansion-panel-text>

              </v-expansion-panel>

              <v-expansion-panel class="mt-5">

                <v-expansion-panel-title class="d-flex align-end px-sm-8 py-sm-6">

                  <v-row class="">
                    <v-col  cols="12"><v-btn size="x-small" color="yellow">2022/08/29</v-btn></v-col>
                    <v-col cols="12" class="py-0 mb-1 d-flex justify-space-between align-end w-100">
                      <span class="text-body-1 text-md-h6 text-left w-75">倒數三天</span>
                      <span class="pb-1 pr-2 text-caption d-none d-sm-block">Read more</span>
                    </v-col>
                  </v-row>

                </v-expansion-panel-title>

                <v-expansion-panel-text class="text-body-2">
                  <h1 class="pa-5 text-center">天阿。只剩三天！來得及嗎？</h1>
                </v-expansion-panel-text>

              </v-expansion-panel>

              <v-expansion-panel class="mt-5">

                <v-expansion-panel-title class="d-flex align-end px-sm-8 py-sm-6">

                  <v-row class="">
                    <v-col  cols="12"><v-btn size="x-small" color="red">2022/08/28</v-btn></v-col>
                    <v-col cols="12" class="py-0 mb-1 d-flex justify-space-between align-end w-100">
                      <span class="text-body-1 text-md-h6 text-left w-75">倒數四天</span>
                      <span class="pb-1 pr-2 text-caption d-none d-sm-block">Read more</span>
                    </v-col>
                  </v-row>

                </v-expansion-panel-title>

                <v-expansion-panel-text class="text-body-2">
                  <NewsExpansionCard>
                      <template v-slot:time >2022/08/28</template>
                      <template v-slot:title >Word of the 4 Day</template>
                      <template v-slot:content >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste sunt nisi, beatae nostrum fuga consectetur ipsa dignissimos deleniti. Aut aliquam at assumenda labore odit a velit repellat praesentium dolore!
                      </template>
                      <div>
                          <v-img
                          src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                          height="200px"
                          cover
                          class="mt-5"
                          ></v-img>
                      </div>
                  </NewsExpansionCard>
                </v-expansion-panel-text>

              </v-expansion-panel>

              <v-expansion-panel class="mt-5">

                <v-expansion-panel-title class="d-flex align-end px-sm-8 py-sm-6">
                  <v-row class="">
                    <v-col  cols="12"><v-btn size="x-small" color="green">2022/08/27</v-btn></v-col>
                    <v-col cols="12" class="py-0 mb-1 d-flex justify-space-between align-end w-100">
                      <span class="text-body-1 text-md-h6 text-left w-75">倒數五天</span>
                      <span class="pb-1 pr-2 text-caption d-none d-sm-block">Read more</span>
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>

                <v-expansion-panel-text class="text-body-2">
                  <NewsExpansionCard>
                      <template v-slot:time >2022/08/27</template>
                      <template v-slot:title >Word of the 5 Day</template>
                      <template v-slot:content >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste sunt nisi, beatae nostrum fuga consectetur ipsa dignissimos deleniti. Aut aliquam at assumenda labore odit a velit repellat praesentium dolore!
                      </template>
                      <template v-slot:v-img >
                        <v-img
                        src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                        height="200px"
                        cover
                        class="mt-5"
                        ></v-img>
                      </template>
                  </NewsExpansionCard>
                </v-expansion-panel-text>

              </v-expansion-panel>

              <v-expansion-panel class="mt-5">

                <v-expansion-panel-title class="d-flex align-end px-sm-8 py-sm-6">
                  <v-row class="">
                    <v-col  cols="12"><v-btn size="x-small" color="yellow">2022/08/26</v-btn></v-col>
                    <v-col cols="12" class="py-0 mb-1 d-flex justify-space-between align-end w-100">
                      <span class="text-body-1 text-md-h6 text-left w-75">倒數六天</span>
                      <span class="pb-1 pr-2 text-caption d-none d-sm-block">Read more</span>
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>

                <v-expansion-panel-text class="text-body-2">
                  <NewsExpansionCard>
                    <template v-slot:time >2022/08/26</template>
                    <template v-slot:title >Word of the 6 Day</template>
                    <template v-slot:content >
                      relating to or dependent on charity; charitable."an eleemosynary educational institution."<br />
                      relating to or dependent on charity; charitable."an eleemosynary educational institution."relating to or dependent on charity; charitable."an eleemosynary educational institution."relating to or dependent on charity; charitable."an eleemosynary educational institution."
                    </template>
                    <template v-slot:v-img >
                      <v-img
                      src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      height="200px"
                      cover
                      class="mt-5"
                      ></v-img>
                    </template>

                  </NewsExpansionCard>
                </v-expansion-panel-text>

              </v-expansion-panel>

            </v-expansion-panels>
          </v-col>

      </v-container>

  </div>

</template>

<script setup>
import { reactive } from 'vue'
import NewsExpansionCard from '@/components/NewsExpansionCard.vue'

import CodeWrapSet from '@/components/CodeWrapSet.vue'
</script>

<style scoped>
/* * {outline: 1px solid red;} */
/* @media screen and (max-width: 767px) {
  .ellipsis {
    max-width: 250px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow : ellipsis;
  }
} */
/*
@media(max-width:992px) {
  .ellipsis {
    max-width: 800px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow : ellipsis;
  }
} */
</style>
