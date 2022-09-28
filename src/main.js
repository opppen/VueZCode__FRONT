// 插件引用處
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import pinia from './plugins/pinia.js'
import TitlePart from '@/components/TitlePart.vue'
import css from './styles/style.css'

loadFonts()
createApp(App)
  .component('TitlePart', TitlePart)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
