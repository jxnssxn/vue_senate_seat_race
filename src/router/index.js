import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CandidateIndex from '../views/CandidateIndex.vue';
import CandidateShow from '../views/CandidateShowPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/candidates',
    name: 'index-details',
    component: CandidateIndex
  },
  {
    path: '/candidates/:id',
    name: 'show-details',
    component: CandidateShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
