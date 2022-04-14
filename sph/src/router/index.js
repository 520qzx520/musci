import { createRouter, createWebHashHistory } from 'vue-router'
import HomeIndex from '../views/HomeIndex.vue'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
import Search from '../views/Search/index.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [

		{
			path: '/',
			name: 'HomeIndex',
			component: HomeIndex,
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
		{
			path: '/register',
			name: 'Register',
			component: Register,
		},
		{
			path: '/search/:keyword?',//加一个问号，params参数可传可不传
			name: 'Search',
			component: Search,
		},
	
		
	],
})
//路由导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path == "/login") next()
//     let userInfo =sessionStorage.userInfo;
//     if (!userInfo) next("/login");
//     next();

// });
// router.beforeEach((to, from, next) => {
// 	if (to.path === '/login' || '/test' || '/changePassword') return next()

// 	const tokenStr = window.sessionStorage.getItem('token')
// 	if (!tokenStr) return next('/login')
// 	next()
// })

export default router
