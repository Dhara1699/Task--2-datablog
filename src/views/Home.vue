<template>
  <section>
    <header>
    <h1>Welcome to Home Page</h1>
    </header>
    <base-card>
    <div class="home">
      <div class="card border-success mb-3" style="max-width: 100%;">
        <div class="card-header bg-transparent border-success">
             <base-button>
              <router-link to="/posts/">POSTS</router-link>
            </base-button>

            <!-- <post v-for="post in posts" :key="post.id" :title="post.title"></post> -->
        </div>
        <div class="card-body text-success">
          <h5 class="card-title">
            <base-button>
              <router-link to="/comment">COMMENTS</router-link>
            </base-button>
          </h5>
        </div>
        <div class="card-footer bg-transparent border-success">
          <base-button>  
            <router-link to="/user">USERS</router-link>
          </base-button>
        </div>
      </div>
    </div>
    </base-card>
  </section>
</template>

<script>
/* eslint-disable */
// import axios from 'axios';
import Post from '@/components/Post.vue'
// @ is an alias to /
export default {
  components: { Post },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
    //   this.posts=response.data;
    // }) 
  }
}
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}
 a.router-link-exact-active {
  color: #b94242;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>
