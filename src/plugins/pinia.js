import { createPinia } from 'pinia'
// 讓 pinia 可以存 localStorage 的套件
// 可以把token(JWT)存
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
