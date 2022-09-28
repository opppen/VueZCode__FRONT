// 這邊放各個網頁的地圖路口(方向)

// Hash模式 (利用#做頁面的切換)
import { createRouter, createWebHashHistory, useRoute } from 'vue-router'
import FrontLayout from '@/views/front/FrontLayout.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user.js'

// https://ithelp.ithome.com.tw/articles/10269836
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 巢狀路由 --------------------
  routes: [
    // ---------------------------------
    // 前台
    // ---------------------------------
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: 'VueZCode',
            // 不需要登入也可以看（如果要登陸的話true)
            login: false,
            // 不需要是原理員也可以看
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: 'VueZCode | 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: 'VueZCode | 登入',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: 'VueZCode | 購物車',
            // 登入才能看
            login: true,
            admin: false
          }
        },
        {
          path: 'goods',
          name: 'products',
          component: () => import('@/views/front/GoodsView.vue'),
          meta: {
            title: 'VueZCode | 週邊商品',
            login: false,
            admin: false
          }
        },

        {
          path: 'product/:id',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: 'VueZCode | 週邊商品(單品頁)',
            login: false,
            admin: false
          }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('@/views/front/OrdersView.vue'),
          meta: {
            title: 'VueZCode | 訂單',
            // 登入才能看
            login: true,
            admin: false
          }
        },
        {
          path: 'artist',
          name: 'artist',
          component: () => import('@/views/front/ArtistView.vue'),
          meta: {
            title: 'VueZCode | 出演陣容',
            // 登入才能看
            login: false,
            admin: false
          }
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/front/NewsView.vue'),
          meta: {
            title: 'VueZCode | 消息一覽',
            // 登入才能看
            login: false,
            admin: false
          }
        },
        {
          path: 'info',
          name: 'info',
          component: () => import('@/views/front/InfoView.vue'),
          meta: {
            title: 'VueZCode | 資訊一覽',
            // 登入才能看
            login: false,
            admin: false
          }
        },
        {
          path: 'timetable',
          name: 'timetable',
          component: () => import('@/views/front/TimeTableView.vue'),
          meta: {
            title: 'VueZCode | 時間一覽',
            // 登入才能看
            login: false,
            admin: false
          }
        }
      ]
    },
    // ---------------------------------
    // 後台(管理員)
    // ---------------------------------
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: 'VueZCode | 管理後台',
            login: true,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: 'VueZCode | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta: {
            title: 'VueZCode | 訂單管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'users/all',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersView.vue'),
          meta: {
            title: 'VueZCode | 會員管理',
            login: true,
            admin: true
          }
        }
      ]
    },
    // ---------------------------------
    // 404頁面
    // ---------------------------------
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '404',
        login: false,
        admin: false
      }
    },
    // 如果上面所設定的網頁路徑都沒有的話就直接顯示以下(亂打網址)
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

// ------------------------------------------------------------------
// 設定路由守衛來控制使用者瀏覽路徑
// ------------------------------------------------------------------
// afterEach進去網頁之後執行一個funtion
router.afterEach((to, from) => {
  // 把網站的標題改成要去的地方標題
  document.title = to.meta.title
})
// next重新導向
router.beforeEach((to, from, next) => {
  const user = useUserStore()
  // 假如使用者已經登入了，而且要去的位置是註冊頁或者登入頁，將它直接跳頁到首頁
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
    // 如果要去的頁面需要登入，但身份是還沒有登入，跳回登入頁
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
    // 如果要去的是管理者頁面(需要管理員身份）。但身份不是管理員。跳頁回首頁
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    // 不放網址就代表他該去哪就去哪
    next()
  }
})
export default router
