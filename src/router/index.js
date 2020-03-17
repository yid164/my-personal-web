import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path:'/profile',
        name: 'profile',
        component: Profile
    },
    {
        path:'/projects',
        name: 'projects',
        component: Projects
    },
    {
        path:'/experience',
        name: 'experience',
        component: Experience
    },
    {
        path:'/contact',
        name: 'contact',
        component: Contact
    },
    {
        path:'/skills',
        name: 'skills',
        component: Skills
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
