/*路由器对象 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login
        },
        
    ]
})