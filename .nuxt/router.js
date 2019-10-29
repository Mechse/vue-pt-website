import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15cb8921 = () => interopDefault(import('..\\pages\\dsgvo.vue' /* webpackChunkName: "pages_dsgvo" */))
const _40d35427 = () => interopDefault(import('..\\pages\\impressum.vue' /* webpackChunkName: "pages_impressum" */))
const _38859302 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dsgvo",
    component: _15cb8921,
    name: "dsgvo"
  }, {
    path: "/impressum",
    component: _40d35427,
    name: "impressum"
  }, {
    path: "/",
    component: _38859302,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
