import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c18cd7c = () => interopDefault(import('..\\pages\\admin-bulletin\\index.vue' /* webpackChunkName: "pages/admin-bulletin/index" */))
const _83e0e300 = () => interopDefault(import('..\\pages\\bulletin\\index.vue' /* webpackChunkName: "pages/bulletin/index" */))
const _dd845356 = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _8a408eee = () => interopDefault(import('..\\pages\\calendar\\index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _5fb8dcb6 = () => interopDefault(import('..\\pages\\doctor-entries\\index.vue' /* webpackChunkName: "pages/doctor-entries/index" */))
const _7218bdc6 = () => interopDefault(import('..\\pages\\entries\\index.vue' /* webpackChunkName: "pages/entries/index" */))
const _30757644 = () => interopDefault(import('..\\pages\\forms\\index.vue' /* webpackChunkName: "pages/forms/index" */))
const _02d6b55e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _488ca040 = () => interopDefault(import('..\\pages\\observations\\index.vue' /* webpackChunkName: "pages/observations/index" */))
const _c509488e = () => interopDefault(import('..\\pages\\patients\\index.vue' /* webpackChunkName: "pages/patients/index" */))
const _1e0a4b6f = () => interopDefault(import('..\\pages\\review\\index.vue' /* webpackChunkName: "pages/review/index" */))
const _69934378 = () => interopDefault(import('..\\pages\\statistics\\index.vue' /* webpackChunkName: "pages/statistics/index" */))
const _7bad3973 = () => interopDefault(import('..\\pages\\tolerance-groups\\index.vue' /* webpackChunkName: "pages/tolerance-groups/index" */))
const _91ea5d36 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _6c33d9bc = () => interopDefault(import('..\\pages\\admin-bulletin\\create.vue' /* webpackChunkName: "pages/admin-bulletin/create" */))
const _520a4378 = () => interopDefault(import('..\\pages\\admin-bulletin\\edit\\index.vue' /* webpackChunkName: "pages/admin-bulletin/edit/index" */))
const _23d6247c = () => interopDefault(import('..\\pages\\admin-bulletin\\statistic\\index.vue' /* webpackChunkName: "pages/admin-bulletin/statistic/index" */))
const _839d81ee = () => interopDefault(import('..\\pages\\cabinet\\create.vue' /* webpackChunkName: "pages/cabinet/create" */))
const _5c02edb9 = () => interopDefault(import('..\\pages\\doctor-entries\\create.vue' /* webpackChunkName: "pages/doctor-entries/create" */))
const _428beea1 = () => interopDefault(import('..\\pages\\doctor-entries\\form\\index.vue' /* webpackChunkName: "pages/doctor-entries/form/index" */))
const _3f34cd41 = () => interopDefault(import('..\\pages\\entries\\create.vue' /* webpackChunkName: "pages/entries/create" */))
const _7192ff07 = () => interopDefault(import('..\\pages\\entries\\statistic\\index.vue' /* webpackChunkName: "pages/entries/statistic/index" */))
const _3897a1a0 = () => interopDefault(import('..\\pages\\forms\\create.vue' /* webpackChunkName: "pages/forms/create" */))
const _799ed244 = () => interopDefault(import('..\\pages\\observations\\create.vue' /* webpackChunkName: "pages/observations/create" */))
const _12ed30b0 = () => interopDefault(import('..\\pages\\patients\\complaint\\index.vue' /* webpackChunkName: "pages/patients/complaint/index" */))
const _39a46625 = () => interopDefault(import('..\\pages\\patients\\create.vue' /* webpackChunkName: "pages/patients/create" */))
const _321dd7eb = () => interopDefault(import('..\\pages\\patients\\entries\\index.vue' /* webpackChunkName: "pages/patients/entries/index" */))
const _21ae3fab = () => interopDefault(import('..\\pages\\tolerance-groups\\create.vue' /* webpackChunkName: "pages/tolerance-groups/create" */))
const _5203a5f9 = () => interopDefault(import('..\\pages\\users\\create.vue' /* webpackChunkName: "pages/users/create" */))
const _39517033 = () => interopDefault(import('..\\pages\\patients\\entries\\create.vue' /* webpackChunkName: "pages/patients/entries/create" */))
const _34e2c1a4 = () => interopDefault(import('..\\pages\\patients\\entries\\result\\index.vue' /* webpackChunkName: "pages/patients/entries/result/index" */))
const _35a49818 = () => interopDefault(import('..\\pages\\patients\\entries\\result\\form.vue' /* webpackChunkName: "pages/patients/entries/result/form" */))
const _0886d913 = () => interopDefault(import('..\\pages\\patients\\entries\\_id.vue' /* webpackChunkName: "pages/patients/entries/_id" */))
const _0cbb042a = () => interopDefault(import('..\\pages\\admin-bulletin\\_id.vue' /* webpackChunkName: "pages/admin-bulletin/_id" */))
const _1d2f30e8 = () => interopDefault(import('..\\pages\\bulletin\\_id.vue' /* webpackChunkName: "pages/bulletin/_id" */))
const _b4f12c06 = () => interopDefault(import('..\\pages\\cabinet\\_id.vue' /* webpackChunkName: "pages/cabinet/_id" */))
const _2243b94d = () => interopDefault(import('..\\pages\\doctor-entries\\_id.vue' /* webpackChunkName: "pages/doctor-entries/_id" */))
const _224146c5 = () => interopDefault(import('..\\pages\\entries\\_id.vue' /* webpackChunkName: "pages/entries/_id" */))
const _ea0a3274 = () => interopDefault(import('..\\pages\\forms\\_id.vue' /* webpackChunkName: "pages/forms/_id" */))
const _609bab70 = () => interopDefault(import('..\\pages\\observations\\_id.vue' /* webpackChunkName: "pages/observations/_id" */))
const _0d6ef861 = () => interopDefault(import('..\\pages\\patients\\_id.vue' /* webpackChunkName: "pages/patients/_id" */))
const _0c10fc9b = () => interopDefault(import('..\\pages\\tolerance-groups\\_id.vue' /* webpackChunkName: "pages/tolerance-groups/_id" */))
const _0577e90d = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))

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
    component: _0c18cd7c,
    name: "admin-bulletin"
  }, {
    path: "/bulletin",
    component: _83e0e300,
    name: "bulletin"
  }, {
    path: "/cabinet",
    component: _dd845356,
    name: "cabinet"
  }, {
    path: "/calendar",
    component: _8a408eee,
    name: "calendar"
  }, {
    path: "/doctor-entries",
    component: _5fb8dcb6,
    name: "doctor-entries"
  }, {
    path: "/entries",
    component: _7218bdc6,
    name: "entries"
  }, {
    path: "/forms",
    component: _30757644,
    name: "forms"
  }, {
    path: "/login",
    component: _02d6b55e,
    name: "login"
  }, {
    path: "/observations",
    component: _488ca040,
    name: "observations"
  }, {
    path: "/patients",
    component: _c509488e,
    name: "patients"
  }, {
    path: "/review",
    component: _1e0a4b6f,
    name: "review"
  }, {
    path: "/statistics",
    component: _69934378,
    name: "statistics"
  }, {
    path: "/tolerance-groups",
    component: _7bad3973,
    name: "tolerance-groups"
  }, {
    path: "/users",
    component: _91ea5d36,
    name: "users"
  }, {
    path: "/admin-bulletin/create",
    component: _6c33d9bc,
    name: "admin-bulletin-create"
  }, {
    path: "/admin-bulletin/edit",
    component: _520a4378,
    name: "admin-bulletin-edit"
  }, {
    path: "/admin-bulletin/statistic",
    component: _23d6247c,
    name: "admin-bulletin-statistic"
  }, {
    path: "/cabinet/create",
    component: _839d81ee,
    name: "cabinet-create"
  }, {
    path: "/doctor-entries/create",
    component: _5c02edb9,
    name: "doctor-entries-create"
  }, {
    path: "/doctor-entries/form",
    component: _428beea1,
    name: "doctor-entries-form"
  }, {
    path: "/entries/create",
    component: _3f34cd41,
    name: "entries-create"
  }, {
    path: "/entries/statistic",
    component: _7192ff07,
    name: "entries-statistic"
  }, {
    path: "/forms/create",
    component: _3897a1a0,
    name: "forms-create"
  }, {
    path: "/observations/create",
    component: _799ed244,
    name: "observations-create"
  }, {
    path: "/patients/complaint",
    component: _12ed30b0,
    name: "patients-complaint"
  }, {
    path: "/patients/create",
    component: _39a46625,
    name: "patients-create"
  }, {
    path: "/patients/entries",
    component: _321dd7eb,
    name: "patients-entries"
  }, {
    path: "/tolerance-groups/create",
    component: _21ae3fab,
    name: "tolerance-groups-create"
  }, {
    path: "/users/create",
    component: _5203a5f9,
    name: "users-create"
  }, {
    path: "/patients/entries/create",
    component: _39517033,
    name: "patients-entries-create"
  }, {
    path: "/patients/entries/result",
    component: _34e2c1a4,
    name: "patients-entries-result"
  }, {
    path: "/patients/entries/result/form",
    component: _35a49818,
    name: "patients-entries-result-form"
  }, {
    path: "/patients/entries/:id",
    component: _0886d913,
    name: "patients-entries-id"
  }, {
    path: "/admin-bulletin/:id?",
    component: _0cbb042a,
    name: "admin-bulletin-id"
  }, {
    path: "/bulletin/:id",
    component: _1d2f30e8,
    name: "bulletin-id"
  }, {
    path: "/cabinet/:id",
    component: _b4f12c06,
    name: "cabinet-id"
  }, {
    path: "/doctor-entries/:id?",
    component: _2243b94d,
    name: "doctor-entries-id"
  }, {
    path: "/entries/:id",
    component: _224146c5,
    name: "entries-id"
  }, {
    path: "/forms/:id",
    component: _ea0a3274,
    name: "forms-id"
  }, {
    path: "/observations/:id",
    component: _609bab70,
    name: "observations-id"
  }, {
    path: "/patients/:id",
    component: _0d6ef861,
    name: "patients-id"
  }, {
    path: "/tolerance-groups/:id?",
    component: _0c10fc9b,
    name: "tolerance-groups-id"
  }, {
    path: "/users/:id",
    component: _0577e90d,
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
