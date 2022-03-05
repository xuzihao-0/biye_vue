import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Home from "@/views/Home"
import Info from "@/components/Info";
import Test1 from "@/components/Test1"
import Test2 from "@/components/Test2"
import Test3 from "@/components/Test3"
import Ano from "@/components/Ano";
import Third from "@/components/Third";
import store from "@/store/index"
import NewTask from "@/components/NewTask";


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/login'

  },

  {
    path: '/home',
    name:'home_l',
    component:Home ,
    children:[
      {
        path: 'test1',
        name:'test1_l',
        component: Test1
      },
      {
        path: 'test2',
        name:'test2_l',
        component: Test2
      },
      {
        path: 'test3',
        name:'test3_l',
        component: Test3
      },
      {
        path: 'ano',
        name:'ano_l',
        component: Ano
      },
      {
        path: 'new',
        name:'new_l',
        component: NewTask
      },
      {
        path: 'third',
        name:'name_l',
        component: Third
      }

    ]
  },
  {
    path: '/login',
    name:'login_l',
    component: Login
  },
  {
    path: '/info',
    name:'info_l',
    component: Info
  },

]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})





const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
