import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "../components/home.vue";
import about from "../components/about.vue";
import login from "../components/login.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
    	path: "/login",
    	component: login
    },
    // 重定向
    {
        path: '/', 
        redirect: '/login' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;