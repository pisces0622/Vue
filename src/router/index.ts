import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component:()=>import('../views/Home.vue'),
    meta:{
      tabbarshow:true
    },
    children:[{
      path:'eatHealthily',
      name:'eatHealthily',
      component:()=>import('../components/EatHealthily.vue')
    },
      {
        path:'genderHealth',
        name:'genderHealth',
        component:()=>import('../components/GenderHealth.vue')
      },
      {
        path:'parenting',
        name:'parenting',
        component:()=>import('../components/Parenting.vue')
      }]

  },
  {
    path:'/Inquiries',
    name:'Inquiries',
    component:()=>import('../views/Inquiries.vue'),
    meta:{
      tabbarshow:true
    }
  },
  {
    path:'/User',
    name:'User',
    component:()=>import('../views/User.vue'),
    meta:{
      tabbarshow:true,
      requireAuth:true
    },
  },{
    path:'/Reg',
    name:'Reg',
    component:()=>import('../views/Enroll.vue'),
    meta:{
      tabbarshow:false
    }
  },{
    path:'/Login',
    name:'Login',
    component:()=>import('../views/Login.vue'),
    meta:{
      tabbarshow:false
    }
  },{
    path:'/HeadPortrait',
    name:'HeadPortrait',
    component:()=>import('../components/Questions.vue'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/DoctorList',
    name:'DoctorList',
    component:()=>import('../components/DoctorList.vue')
  },{
    path:'/DoctorDetails',
    name:'DoctorDetails',
    component:()=>import('../components/DoctorDetails.vue'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/Drugs',
    name:'Drugs',
    component :()=>import('../views/Drugs.vue')
  },
  {
    path:'/follow',
    name:'follow',
    component:()=>import('../components/Follow.vue')
  },
  // 配置404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
    meta:{
      tabbarshow:false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
