/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 15:43:49
 * @LastEditTime: 2023-10-06 16:50:25
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\router\dynamicIp.js
 */
import i18n from '@/i18n'
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/dynamicIp',
    component: Layout,
    redirect: { name: 'DynamicIp' },
    meta: {
      title: i18n.global.t('router.dynamic'),
      icon: 'icon-dynamic-state'
    },
    children: [
      {
        path: '/dynamicIp',
        name: 'DynamicIp',
        component: () => import('@/views/dynamicIp/index.vue'),

        beforeEnter(to,from,next){
            next()
        },


        meta: {
          title: i18n.global.t('router.dynamic')
        }
      }
    ]
  }
]