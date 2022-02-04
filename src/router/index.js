import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleView from '../components/SingleView.vue'
import Search from '../components/Search.vue'
import Category from '../components/Category.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:name",
    name: "Search",
    component: Search,
  },
  {
    path: "/category/:cat",
    name: "Category",
    component: Category,
  },
  {
    path: "/singleview/:id",
    name: "SingleView",
    component: SingleView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
