import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b5095080 = () => interopDefault(import('..\\pages\\admin-bulletin\\index.vue' /* webpackChunkName: "pages/admin-bulletin/index" */))
const _c020f904 = () => interopDefault(import('..\\pages\\bulletin\\index.vue' /* webpackChunkName: "pages/bulletin/index" */))
const _2d2c4997 = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _c680a4f2 = () => interopDefault(import('..\\pages\\calendar\\index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _7bab5023 = () => interopDefault(import('..\\pages\\doctor-entries\\index.vue' /* webpackChunkName: "pages/doctor-entries/index" */))
const _62e2145f = () => interopDefault(import('..\\pages\\entries\\index.vue' /* webpackChunkName: "pages/entries/index" */))
const _2fdba0a0 = () => interopDefault(import('..\\pages\\forms\\index.vue' /* webpackChunkName: "pages/forms/index" */))
const _46f72fdc = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _327af5de = () => interopDefault(import('..\\pages\\observations\\index.vue' /* webpackChunkName: "pages/observations/index" */))
const _7f5b50b7 = () => interopDefault(import('..\\pages\\patients\\index.vue' /* webpackChunkName: "pages/patients/index" */))
const _4e813026 = () => interopDefault(import('..\\pages\\review\\index.vue' /* webpackChunkName: "pages/review/index" */))
const _9625e87c = () => interopDefault(import('..\\pages\\statistics\\index.vue' /* webpackChunkName: "pages/statistics/index" */))
const _0471030e = () => interopDefault(import('..\\pages\\toleranceGroups\\index.vue' /* webpackChunkName: "pages/toleranceGroups/index" */))
const _01bda5b2 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _31a3eafe = () => interopDefault(import('..\\pages\\admin-bulletin\\create.vue' /* webpackChunkName: "pages/admin-bulletin/create" */))
const _34c6a914 = () => interopDefault(import('..\\pages\\admin-bulletin\\edit\\index.vue' /* webpackChunkName: "pages/admin-bulletin/edit/index" */))
const _3a59d484 = () => interopDefault(import('..\\pages\\admin-bulletin\\statistic\\index.vue' /* webpackChunkName: "pages/admin-bulletin/statistic/index" */))
const _bfdd97f2 = () => interopDefault(import('..\\pages\\cabinet\\create.vue' /* webpackChunkName: "pages/cabinet/create" */))
const _2172fefb = () => interopDefault(import('..\\pages\\doctor-entries\\create.vue' /* webpackChunkName: "pages/doctor-entries/create" */))
const _53c352c2 = () => interopDefault(import('..\\pages\\doctor-entries\\form\\index.vue' /* webpackChunkName: "pages/doctor-entries/form/index" */))
const _2114c23f = () => interopDefault(import('..\\pages\\entries\\create.vue' /* webpackChunkName: "pages/entries/create" */))
const _7dfb4e85 = () => interopDefault(import('..\\pages\\entries\\statistic\\index.vue' /* webpackChunkName: "pages/entries/statistic/index" */))
const _196683c4 = () => interopDefault(import('..\\pages\\forms\\create.vue' /* webpackChunkName: "pages/forms/create" */))
const _449810a0 = () => interopDefault(import('..\\pages\\observations\\create.vue' /* webpackChunkName: "pages/observations/create" */))
const _d8e25e1c = () => interopDefault(import('..\\pages\\patients\\complaint\\index.vue' /* webpackChunkName: "pages/patients/complaint/index" */))
const _d879de32 = () => interopDefault(import('..\\pages\\patients\\create.vue' /* webpackChunkName: "pages/patients/create" */))
const _5bcea0ad = () => interopDefault(import('..\\pages\\patients\\entries\\index.vue' /* webpackChunkName: "pages/patients/entries/index" */))
const _0cb8c277 = () => interopDefault(import('..\\pages\\users\\create.vue' /* webpackChunkName: "pages/users/create" */))
const _45b9bfb1 = () => interopDefault(import('..\\pages\\patients\\entries\\create.vue' /* webpackChunkName: "pages/patients/entries/create" */))
const _31d385f0 = () => interopDefault(import('..\\pages\\patients\\entries\\result\\index.vue' /* webpackChunkName: "pages/patients/entries/result/index" */))
const _69a6d116 = () => interopDefault(import('..\\pages\\patients\\entries\\result\\form.vue' /* webpackChunkName: "pages/patients/entries/result/form" */))
const _64122b56 = () => interopDefault(import('..\\pages\\patients\\entries\\_id.vue' /* webpackChunkName: "pages/patients/entries/_id" */))
const _637c4a28 = () => interopDefault(import('..\\pages\\admin-bulletin\\_id.vue' /* webpackChunkName: "pages/admin-bulletin/_id" */))
const _50376534 = () => interopDefault(import('..\\pages\\bulletin\\_id.vue' /* webpackChunkName: "pages/bulletin/_id" */))
const _24c47482 = () => interopDefault(import('..\\pages\\cabinet\\_id.vue' /* webpackChunkName: "pages/cabinet/_id" */))
const _7904ff4b = () => interopDefault(import('..\\pages\\doctor-entries\\_id.vue' /* webpackChunkName: "pages/doctor-entries/_id" */))
const _6a57a287 = () => interopDefault(import('..\\pages\\entries\\_id.vue' /* webpackChunkName: "pages/entries/_id" */))
const _3dcd69f0 = () => interopDefault(import('..\\pages\\forms\\_id.vue' /* webpackChunkName: "pages/forms/_id" */))
const _8d2e5074 = () => interopDefault(import('..\\pages\\observations\\_id.vue' /* webpackChunkName: "pages/observations/_id" */))
const _6fb7d642 = () => interopDefault(import('..\\pages\\patients\\_id.vue' /* webpackChunkName: "pages/patients/_id" */))
const _5b964d4f = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin-bulletin",
    component: _b5095080,
    name: "admin-bulletin"
  }, {
    path: "/bulletin",
    component: _c020f904,
    name: "bulletin"
  }, {
    path: "/cabinet",
    component: _2d2c4997,
    name: "cabinet"
  }, {
    path: "/calendar",
    component: _c680a4f2,
    name: "calendar"
  }, {
    path: "/doctor-entries",
    component: _7bab5023,
    name: "doctor-entries"
  }, {
    path: "/entries",
    component: _62e2145f,
    name: "entries"
  }, {
    path: "/forms",
    component: _2fdba0a0,
    name: "forms"
  }, {
    path: "/login",
    component: _46f72fdc,
    name: "login"
  }, {
    path: "/observations",
    component: _327af5de,
    name: "observations"
  }, {
    path: "/patients",
    component: _7f5b50b7,
    name: "patients"
  }, {
    path: "/review",
    component: _4e813026,
    name: "review"
  }, {
    path: "/statistics",
    component: _9625e87c,
    name: "statistics"
  }, {
    path: "/toleranceGroups",
    component: _0471030e,
    name: "toleranceGroups"
  }, {
    path: "/users",
    component: _01bda5b2,
    name: "users"
  }, {
    path: "/admin-bulletin/create",
    component: _31a3eafe,
    name: "admin-bulletin-create"
  }, {
    path: "/admin-bulletin/edit",
    component: _34c6a914,
    name: "admin-bulletin-edit"
  }, {
    path: "/admin-bulletin/statistic",
    component: _3a59d484,
    name: "admin-bulletin-statistic"
  }, {
    path: "/cabinet/create",
    component: _bfdd97f2,
    name: "cabinet-create"
  }, {
    path: "/doctor-entries/create",
    component: _2172fefb,
    name: "doctor-entries-create"
  }, {
    path: "/doctor-entries/form",
    component: _53c352c2,
    name: "doctor-entries-form"
  }, {
    path: "/entries/create",
    component: _2114c23f,
    name: "entries-create"
  }, {
    path: "/entries/statistic",
    component: _7dfb4e85,
    name: "entries-statistic"
  }, {
    path: "/forms/create",
    component: _196683c4,
    name: "forms-create"
  }, {
    path: "/observations/create",
    component: _449810a0,
    name: "observations-create"
  }, {
    path: "/patients/complaint",
    component: _d8e25e1c,
    name: "patients-complaint"
  }, {
    path: "/patients/create",
    component: _d879de32,
    name: "patients-create"
  }, {
    path: "/patients/entries",
    component: _5bcea0ad,
    name: "patients-entries"
  }, {
    path: "/users/create",
    component: _0cb8c277,
    name: "users-create"
  }, {
    path: "/patients/entries/create",
    component: _45b9bfb1,
    name: "patients-entries-create"
  }, {
    path: "/patients/entries/result",
    component: _31d385f0,
    name: "patients-entries-result"
  }, {
    path: "/patients/entries/result/form",
    component: _69a6d116,
    name: "patients-entries-result-form"
  }, {
    path: "/patients/entries/:id",
    component: _64122b56,
    name: "patients-entries-id"
  }, {
    path: "/admin-bulletin/:id?",
    component: _637c4a28,
    name: "admin-bulletin-id"
  }, {
    path: "/bulletin/:id",
    component: _50376534,
    name: "bulletin-id"
  }, {
    path: "/cabinet/:id",
    component: _24c47482,
    name: "cabinet-id"
  }, {
    path: "/doctor-entries/:id?",
    component: _7904ff4b,
    name: "doctor-entries-id"
  }, {
    path: "/entries/:id",
    component: _6a57a287,
    name: "entries-id"
  }, {
    path: "/forms/:id",
    component: _3dcd69f0,
    name: "forms-id"
  }, {
    path: "/observations/:id",
    component: _8d2e5074,
    name: "observations-id"
  }, {
    path: "/patients/:id",
    component: _6fb7d642,
    name: "patients-id"
  }, {
    path: "/users/:id",
    component: _5b964d4f,
    name: "users-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
