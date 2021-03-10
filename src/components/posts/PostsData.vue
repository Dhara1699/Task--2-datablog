<template>
    <base-card>
    <h2>This Page Is Belong To PostsData.</h2>
        <div>
            <ul>
                <li v-for="post in posts"  :key="post.userId">
                    {{ post.title }}
                </li>
            </ul>
        </div>
    </base-card>

</template>

<script>
import axios from 'axios';
window.axios = require('axios');
export default {
    data() {
        return {
            posts : null,
        }; 
    },
    mounted: function() {
        const headers = { "Content-Type": "application/json" };
        axios.get('https://jsonplaceholder.typicode.com/posts' , { headers }).then(response =>
        {
            console.log(response.data);
            this.posts=response.data;
        }) 
    }
}   
</script>