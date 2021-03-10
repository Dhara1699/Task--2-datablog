<template>
    <h2>This Page Is Belong To PostsData.</h2>
    <base-card>
        <div>
            <ul>
                <li :v-for="'post' in posts" v-text="post.id"></li>
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
            posts : null
        }; 
    },
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => this.posts = response.json() ).then((json) => console.log(json));
    }
}   
</script>