import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contacts from "../views/Contacts";
import MyProfile from "../views/MyProfile";
import Experience from "../views/Experience";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my_profile',
      name: 'MyProfile',
      component: MyProfile
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
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
