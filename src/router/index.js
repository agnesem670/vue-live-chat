import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/config'
import WelcomeView from '../views/WelcomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'

//auth guard
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if(!user) {
    next({name: 'welcome'})
  }else{
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if(user) {
    next({name: 'chatroom'})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: ChatroomView,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
