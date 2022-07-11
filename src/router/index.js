import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入主页和我的组件
import Home from '../views/Home/my_home.vue'
import User from '../views/User/my_user.vue'
// 导入评论子组件
import Comment from '@/components/comment/comment_set.vue'
// 安装插件
Vue.use(VueRouter)
// 路由规则
const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User },
  { path: '/user/comment', component: Comment }
]
// 注册为实例
const router = new VueRouter({
  routes
})

export default router
