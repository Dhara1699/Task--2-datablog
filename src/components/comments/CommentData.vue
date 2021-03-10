<template>
    <base-card>
    <h2>This Page Belongs To The CommentData</h2>
    <div>
        <ul>
            <li v-for="comment in comments" :key="comment.postId">
                {{ comment.body }}
            </li>
            <li v-for="comment in comments" :key="comment.postId">{{ comment.email }}</li>
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
            comments : null
        };
    },
    mounted: 
        function() {
            axios.get('https://jsonplaceholder.typicode.com/comments/').then(response =>{
            console.log(response.data);
            this.comments=response.data;
        }) 
    }
}
</script>