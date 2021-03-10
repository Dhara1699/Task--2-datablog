import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import PostsData from '../components/posts/PostsData.vue';
import PostsItems from '../components/posts/PostsItems.vue';
import UserData from '../components/users/UserData.vue';
import CommentData from '../components/comments/CommentData.vue';


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts' , 
    name: 'Posts' , 
    component: PostsData,
    children: [ { path: ':id', name: 'PostsItems', component: PostsItems } ]
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
