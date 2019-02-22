export default [
  {
    name: "home",
    path: "/",
    component: process.isServer ? require("~/pages/Index.vue").default : () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue"),
    meta: { data: true }
  },
  {
    name: "about",
    path: "/about",
    component: process.isServer ? require("~/pages/About.vue").default : () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue")
  },
  {
    path: "/works/test-work",
    component: process.isServer ? require("~/templates/Work.vue").default : () => import(/* webpackChunkName: "component--work" */ "~/templates/Work.vue"),
    meta: { data: true }
  },
  {
    name: "404",
    path: "(.*)",
    component: process.isServer ? require("/Users/Keegan/Desktop/mywebsite/node_modules/gridsome/app/pages/404.vue").default : () => import(/* webpackChunkName: "component--404" */ "/Users/Keegan/Desktop/mywebsite/node_modules/gridsome/app/pages/404.vue")
  }
]

