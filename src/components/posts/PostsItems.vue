<template>
<base-card>
    <h2>This Page is Belongs to PostsItems</h2>
</base-card>    
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            postsitem : null
        };
    },
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts/:id').then(response =>
        {
            console.log(response.data);
            this.postsitem = response.data;
        });
    }
}
</script>