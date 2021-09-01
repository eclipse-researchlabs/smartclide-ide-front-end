import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '/imports/ui/components/Home'
import Register from "../imports/ui/components/_old/Register";
import Workflows from "../imports/ui/components/Workflows";
import Services from "../imports/ui/components/Services";
import Deployments from "../imports/ui/components/Deployments";

Vue.use(VueRouter)

const routes = [
    {
        path: "/index",
        name: "Home",
        component: Home
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/workflows",
        name: "Workflows",
        component: Workflows
    },
    {
        path: "/services",
        name: 'Services',
        component: Services
    },
    {
        path: "/deployments",
        name: 'Deployments',
        component: Deployments
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
