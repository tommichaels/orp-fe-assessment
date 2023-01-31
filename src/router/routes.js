
const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    children: [
                {
                path: '/',
                component: () => import('pages/Dashboard.vue')

              },
                {
                  path: 'invoice',
                  component: () => import('pages/Invoices.vue')
                },
                {
                  path: 'help',
                  component: () => import('pages/Help.vue')
                },
                {
                  path: 'wallet',
                  component: () => import('pages/Wallet.vue')
                },
                {
                  path: 'activity',
                  component: () => import('pages/Activity.vue')
                },
              ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
