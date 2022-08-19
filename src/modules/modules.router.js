import AppHomeView from '@mod/home/AppHomeView.vue'

export const routes = [
  {
    path: '/',
    component: AppHomeView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]
