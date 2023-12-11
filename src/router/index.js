/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 10:22:08
 * @LastEditTime: 2023-10-12 17:38:01
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import dynamicIp from './dynamicIp'
import staticIp from './staticIp'
import user from './user'
import set from './set'
const publicRoutes = [
  {
    path:'/',
    name:'Login',
    redirect: '/login',
    hidden:true
  },
  ...dynamicIp,
  ...staticIp,
  ...user,
  ...set
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publicRoutes,
    { path: '/:pathMatch(.*)', redirect: '/login', hidden: true }
  ]
})

export default router
