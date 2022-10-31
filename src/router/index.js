import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                enterClass: "animate__animated animate__fadeInLeft animate__fast",
                leaveClass: "animate__animated animate__fadeOutRight animate__fast"
            }
        },
        {
            path: '/About',
            name: 'About',
            component: About,
            meta: {
                enterClass: "animate__animated animate__fadeInRight animate__fast",
                leaveClass: "animate__animated animate__fadeOutLeft animate__fast"
            }
        }
    ]
})

export default router