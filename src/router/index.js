import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleView from '../components/SingleView.vue'
import Search from '../components/Search.vue'
import Category from '../components/Category.vue'

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
    path: "/singleview/:id",
    name: "SingleView",
    component: SingleView,
  },
  {
    path: "/category/:cat",
    props: true,
    name: "Category",
    component: Category,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
