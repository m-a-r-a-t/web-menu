import App from './App'
if (module.hot) {
  module.hot.accept(function () {
    location.reload()
  })
}

const routes = [
  // {path: '/', component: Login},
  // {path: '/create_room', component: CreateRoomOrJoin},
  // {path: '/game', component: Game},
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
const app = Vue.createApp(App)
app.use(router)
app.mount('#app')
