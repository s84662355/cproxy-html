/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-08 16:51:37
 * @LastEditTime: 2023-10-08 16:52:09
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\router\set.js
 */
import i18n from '@/i18n'
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/set',
    component: Layout,
    redirect: { name: 'Set' },
    meta: {
      title: i18n.global.t('router.set'),
      icon: 'icon-set'
    },
    children: [
      {
        path: '/set',
        name: 'Set',
        component: () => import('@/views/set/index.vue'),
        meta: {
          title: i18n.global.t('router.set')
        }
      }
    ]
  }
]