import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import PostsData from '../components/PostsData.vue';
import UserData from '../components/UserData.vue';
import CommentData from '../components/CommentData.vue';


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts' , 
    name: 'Posts' , 
    component: PostsData 
  },
  { 
    path: '/user' , 
    name: 'User' , 
    component: UserData 
  },
  { 
    path: '/comment' , 
    name: 'Comment' , 
    component: CommentData 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
