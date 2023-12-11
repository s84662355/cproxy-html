import i18n from '@/i18n'
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/staticIp',
    component: Layout,
    redirect: { name: 'StaticIp' },
    meta: {
      title: i18n.global.t('router.static'),
      icon: 'icon-dynamic-state'
    },
    children: [
      {
        path: '/staticIp',
        name: 'StaticIp',
        component: () => import('@/views/staticIp/index.vue'),
        meta: {
          title: i18n.global.t('router.static')
        }
      }
    ]
  }
]