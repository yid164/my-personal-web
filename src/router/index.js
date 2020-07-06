import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contacts from "../views/Contacts";
import About from "../views/About";
import Experience from "../views/Experience";
import Timeline from "../views/Timeline";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
