<template>
    <h2>This Page Is Belong To PostsData.</h2>
    <base-card>
        <div>
          <li v-for="post in posts" :key="post.title">
            {{ post.title }}
        </li>
        </div>
    </base-card>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');
export default {
    data() {
        return {
            posts : null
        }; 
    },
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(response =>{
            console.log(response.data);
            this.posts=response.data;
        }) 
    }
}   
</script>