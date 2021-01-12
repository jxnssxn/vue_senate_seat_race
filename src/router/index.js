import Vue from 'vue';
import VueRouter from 'vue-router';
import CandidateIndex from '../views/CandidateIndex.vue';
import Home from '../views/Home.vue';
import CandidateShow from '../views/CandidateShowPage.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Contact from '../views/Contact.vue';

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
    path: '/signup',
    name: 'signup-details',
    component: Signup
  },
  {
    path: '/login',
    name: 'login-details',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout-details',
    component: Logout
  },
  {
    path: '/candidates/:id',
    name: 'show-details',
    component: CandidateShow
  },
  {
    path: '/Contact',
    name: 'contact-candidate',
    component: Contact
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
