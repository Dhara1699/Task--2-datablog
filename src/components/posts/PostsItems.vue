<template>
<base-card>
    <h2>This Page is Belongs to PostsItems</h2>
    <div>
         <ul v-for="items in postsitem" 
            :key="items.userId"
            >
               <li> {{ items.id }} </li>
               <li> {{ items.userId }} </li>
               <li> {{ items.title }} </li>
               <li> {{ items.body }} </li>
            </ul>
    </div>
</base-card>    
</template>

<script>
// import axios from 'axios';
export default {
    data() {
        return {
            // postsitem : null
        };
    },
    mounted: function() {
        alert(this.$route.params)
        // if (this.$route && this.postsitem.id) {
        //     axios.get('https://jsonplaceholder.typicode.com/posts/' + this.postitem.id).then(response =>
        //     {
        //         console.log(response.data);
        //         this.postsitem = response.data;
        //         console.log(this.postsitem);
        //     });
        // }
    }
}
</script>