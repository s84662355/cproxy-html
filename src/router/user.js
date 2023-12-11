/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 15:43:49
 * @LastEditTime: 2023-10-12 17:41:20
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\router\user.js
 */
import i18n from '@/i18n'
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/login',
    component: Layout,
    redirect: { name: 'Login' },
    meta: {
      title: i18n.global.t('router.login'),
      icon: 'icon-dynamic-state',
      
    },
    hidden:true,
    children: [
      {
        path: '/login',
        name: 'Login',
       
        component: () => import('@/views/user/login.vue'),
        
        meta: {
          title: i18n.global.t('router.login')
        }
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/user/register.vue'),
        
        meta: {
          title: i18n.global.t('router.register')
        }
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/user/forgot-password.vue'),
        
        meta: {
          title: i18n.global.t('router.forgotPassword')
        }
      }
    ]
  }
]