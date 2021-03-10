<template>
    <base-card>
    <h2>This Page Is Belong To PostsData.</h2>
        <div>
        <h2>This Page is Belongs to PostsItems</h2>
        <router-link to="{ name: 'PostsItems', params: { id: '1' }}">
            <ul v-for="items in postsitem" 
            :key="items.userId"
            :user-id="items.userId"
            :id="items.id"
            :title="items.title"
            :body="items.body"
            >
               <li> {{ id }} </li>
               <li> {{ userId }} </li>
               <li> {{ title }} </li>
               <li> {{ body }} </li>
            </ul>
        </router-link>
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
        const headers = { "Content-Type": "application/json" };
        axios.get('https://jsonplaceholder.typicode.com/posts' , { headers }).then(response =>{
            console.log(response.data);
            this.posts=response.data;
        }) 
    }
}   
</script>