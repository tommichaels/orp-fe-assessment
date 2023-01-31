
const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    children: [
                {
                  path: 'invoice',
                  component: () => import('pages/Invoices.vue')
                }
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
